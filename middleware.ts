import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const routeMatchers = {
  admin: createRouteMatcher(["/dashboard/admin(.*)"]),
  user: createRouteMatcher(["/dashboard/users(.*)"]),
  auth: createRouteMatcher(["/login", "/register"]),
};

export default clerkMiddleware(async (auth, req) => {
  const { admin, user, auth: authRoutes } = routeMatchers;
  const { sessionClaims } = await auth();
  const role = sessionClaims?.metadata?.role ?? "";
  const isAuthenticated = !!sessionClaims;

  // Redirect unauthenticated users to home
  if (!isAuthenticated && (admin(req) || user(req))) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (isAuthenticated) {
    // Prevent authenticated users from accessing signin/signup
    if (authRoutes(req)) {
      return NextResponse.redirect(new URL("/", req.url));
    }

    // Admin and SuperAdmin role access
    if (admin(req) && ["superAdmin", "admin"].includes(role)) {
      return NextResponse.redirect(new URL("/dashboard/admin", req.url));
    }

    // Non-Admin role access
    if (admin(req) && !["superAdmin", "admin"].includes(role)) {
      return NextResponse.redirect(new URL("/dashboard/users", req.url));
    }
  }

  // Allow all other requests to proceed
  return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
