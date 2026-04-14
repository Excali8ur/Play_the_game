# DaisyUI Forest Theme - Quick Reference

## 🎨 Forest Theme Colors
DaisyUI's Forest theme is a dark theme with nature-inspired colors:
- **Primary**: Deep green (#1eb854)
- **Secondary**: Teal/cyan
- **Accent**: Orange/amber
- **Neutral**: Dark grays
- **Base backgrounds**: Very dark (almost black) to dark gray

## 📝 Most Common UI Elements

### 1. Layout & Containers
```tsx
// Main container
<div className="container mx-auto px-4 py-8">

// Cards (use these instead of plain divs!)
<div className="card bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Title</h2>
    <p>Content</p>
  </div>
</div>

// Grid layouts
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
```

### 2. Typography
```tsx
// Headings (Forest theme auto-styles these)
<h1 className="text-4xl font-bold">Large Heading</h1>
<h2 className="text-3xl font-bold">Medium Heading</h2>
<h2 className="card-title">Card Heading (styled)</h2>

// Text
<p className="text-base-content">Normal text</p>
<p className="opacity-70">Muted text</p>
<p className="text-primary">Primary color text</p>
<p className="text-accent">Accent color text</p>
```

### 3. Buttons
```tsx
<button className="btn">Default</button>
<button className="btn btn-primary">Primary (green)</button>
<button className="btn btn-secondary">Secondary (teal)</button>
<button className="btn btn-accent">Accent (orange)</button>
<button className="btn btn-ghost">Ghost</button>
<button className="btn btn-outline">Outline</button>

// Sizes
<button className="btn btn-sm">Small</button>
<button className="btn btn-lg">Large</button>

// States
<button className="btn btn-primary" disabled>Disabled</button>
<button className="btn btn-primary loading">Loading</button>
```

### 4. Forms
```tsx
// Input group
<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Label</span>
  </label>
  <input type="text" placeholder="Type here" className="input input-bordered w-full" />
  <label className="label">
    <span className="label-text-alt">Helper text</span>
  </label>
</div>

// Select
<select className="select select-bordered w-full">
  <option>Option 1</option>
  <option>Option 2</option>
</select>

// Textarea
<textarea className="textarea textarea-bordered w-full" placeholder="Bio"></textarea>

// Checkbox
<input type="checkbox" className="checkbox" />
<input type="checkbox" className="checkbox checkbox-primary" />

// Radio
<input type="radio" name="opt" className="radio radio-primary" />
```

### 5. Navigation
```tsx
// Navbar
<div className="navbar bg-base-200">
  <div className="navbar-start">
    <a className="btn btn-ghost text-xl">Logo</a>
  </div>
  <div className="navbar-end">
    <ul className="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
    </ul>
  </div>
</div>

// Menu (vertical or horizontal)
<ul className="menu bg-base-200 w-56 rounded-box">
  <li><a>Item 1</a></li>
  <li><a>Item 2</a></li>
</ul>
```

### 6. Alerts & Messages
```tsx
<div className="alert alert-info">
  <span>Info message</span>
</div>

<div className="alert alert-success">
  <span>Success message</span>
</div>

<div className="alert alert-warning">
  <span>Warning message</span>
</div>

<div className="alert alert-error">
  <span>Error message</span>
</div>
```

### 7. Badges
```tsx
<div className="badge">Default</div>
<div className="badge badge-primary">Primary</div>
<div className="badge badge-secondary">Secondary</div>
<div className="badge badge-accent">Accent</div>
```

### 8. Loading Indicators
```tsx
<span className="loading loading-spinner"></span>
<span className="loading loading-dots"></span>
<span className="loading loading-ring"></span>

// With color
<span className="loading loading-spinner loading-lg text-primary"></span>
```

### 9. Tables
```tsx
<div className="overflow-x-auto">
  <table className="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
    <tbody>
      <tr className="hover">
        <td>John</td>
        <td>Developer</td>
      </tr>
    </tbody>
  </table>
</div>

// Zebra stripes
<table className="table table-zebra">
```

### 10. Modals
```tsx
{/* Button */}
<button className="btn" onClick={()=>document.getElementById('my_modal').showModal()}>
  Open Modal
</button>

{/* Modal */}
<dialog id="my_modal" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Title</h3>
    <p className="py-4">Content</p>
    <div className="modal-action">
      <form method="dialog">
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
```

## 🎯 Key Principles for Forest Theme

### ✅ DO:
- Use `bg-base-100`, `bg-base-200`, `bg-base-300` for backgrounds
- Use `text-base-content` for readable text (auto-contrasts)
- Use `text-primary` for accent text (green in Forest)
- Use `opacity-70` or `opacity-80` for muted text
- Use semantic component classes: `card`, `btn`, `input`, etc.
- Combine DaisyUI with Tailwind utilities: `card bg-base-200 shadow-xl`

### ❌ DON'T:
- Use hardcoded colors: `bg-gray-500`, `text-blue-600`
- Use plain `<div>` when DaisyUI has a component for it
- Mix theme colors manually - let DaisyUI handle it
- Forget responsive classes: `grid-cols-1 md:grid-cols-2`

## 🔍 Quick Test
To verify Forest theme is working, check:
1. **Background**: Should be very dark (almost black)
2. **Primary buttons**: Should be deep green
3. **Cards**: Should have dark backgrounds with good contrast
4. **Text**: Should be light colored (readable on dark)

## 📚 Resources
- [DaisyUI Components](https://daisyui.com/components/)
- [DaisyUI Forest Theme Preview](https://daisyui.com/theme-generator/)
- [Tailwind CSS](https://tailwindcss.com/docs)
