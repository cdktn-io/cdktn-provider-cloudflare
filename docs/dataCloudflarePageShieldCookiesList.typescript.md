# `dataCloudflarePageShieldCookiesList` Submodule <a name="`dataCloudflarePageShieldCookiesList` Submodule" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflarePageShieldCookiesList <a name="DataCloudflarePageShieldCookiesList" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/page_shield_cookies_list cloudflare_page_shield_cookies_list}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer"></a>

```typescript
import { dataCloudflarePageShieldCookiesList } from '@cdktn/provider-cloudflare'

new dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList(scope: Construct, id: string, config: DataCloudflarePageShieldCookiesListConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig">DataCloudflarePageShieldCookiesListConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig">DataCloudflarePageShieldCookiesListConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetDirection">resetDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetDomain">resetDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetExport">resetExport</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetHosts">resetHosts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetHttpOnly">resetHttpOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetMaxItems">resetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetOrderBy">resetOrderBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetPage">resetPage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetPageUrl">resetPageUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetPerPage">resetPerPage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetSameSite">resetSameSite</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetSecure">resetSecure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDirection` <a name="resetDirection" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetDirection"></a>

```typescript
public resetDirection(): void
```

##### `resetDomain` <a name="resetDomain" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetDomain"></a>

```typescript
public resetDomain(): void
```

##### `resetExport` <a name="resetExport" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetExport"></a>

```typescript
public resetExport(): void
```

##### `resetHosts` <a name="resetHosts" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetHosts"></a>

```typescript
public resetHosts(): void
```

##### `resetHttpOnly` <a name="resetHttpOnly" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetHttpOnly"></a>

```typescript
public resetHttpOnly(): void
```

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetMaxItems"></a>

```typescript
public resetMaxItems(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetName"></a>

```typescript
public resetName(): void
```

##### `resetOrderBy` <a name="resetOrderBy" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetOrderBy"></a>

```typescript
public resetOrderBy(): void
```

##### `resetPage` <a name="resetPage" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetPage"></a>

```typescript
public resetPage(): void
```

##### `resetPageUrl` <a name="resetPageUrl" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetPageUrl"></a>

```typescript
public resetPageUrl(): void
```

##### `resetPath` <a name="resetPath" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetPerPage` <a name="resetPerPage" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetPerPage"></a>

```typescript
public resetPerPage(): void
```

##### `resetSameSite` <a name="resetSameSite" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetSameSite"></a>

```typescript
public resetSameSite(): void
```

##### `resetSecure` <a name="resetSecure" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetSecure"></a>

```typescript
public resetSecure(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetType"></a>

```typescript
public resetType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflarePageShieldCookiesList resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.isConstruct"></a>

```typescript
import { dataCloudflarePageShieldCookiesList } from '@cdktn/provider-cloudflare'

dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.isTerraformElement"></a>

```typescript
import { dataCloudflarePageShieldCookiesList } from '@cdktn/provider-cloudflare'

dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.isTerraformDataSource"></a>

```typescript
import { dataCloudflarePageShieldCookiesList } from '@cdktn/provider-cloudflare'

dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.generateConfigForImport"></a>

```typescript
import { dataCloudflarePageShieldCookiesList } from '@cdktn/provider-cloudflare'

dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflarePageShieldCookiesList resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflarePageShieldCookiesList to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflarePageShieldCookiesList that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/page_shield_cookies_list#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflarePageShieldCookiesList to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.result">result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList">DataCloudflarePageShieldCookiesListResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.directionInput">directionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.domainInput">domainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.exportInput">exportInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.hostsInput">hostsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.httpOnlyInput">httpOnlyInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.maxItemsInput">maxItemsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.orderByInput">orderByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.pageInput">pageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.pageUrlInput">pageUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.perPageInput">perPageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.sameSiteInput">sameSiteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.secureInput">secureInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.direction">direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.export">export</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.hosts">hosts</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.httpOnly">httpOnly</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.maxItems">maxItems</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.orderBy">orderBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.page">page</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.pageUrl">pageUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.perPage">perPage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.sameSite">sameSite</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.secure">secure</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.result"></a>

```typescript
public readonly result: DataCloudflarePageShieldCookiesListResultList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList">DataCloudflarePageShieldCookiesListResultList</a>

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.directionInput"></a>

```typescript
public readonly directionInput: string;
```

- *Type:* string

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.domainInput"></a>

```typescript
public readonly domainInput: string;
```

- *Type:* string

---

##### `exportInput`<sup>Optional</sup> <a name="exportInput" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.exportInput"></a>

```typescript
public readonly exportInput: string;
```

- *Type:* string

---

##### `hostsInput`<sup>Optional</sup> <a name="hostsInput" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.hostsInput"></a>

```typescript
public readonly hostsInput: string;
```

- *Type:* string

---

##### `httpOnlyInput`<sup>Optional</sup> <a name="httpOnlyInput" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.httpOnlyInput"></a>

```typescript
public readonly httpOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.maxItemsInput"></a>

```typescript
public readonly maxItemsInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `orderByInput`<sup>Optional</sup> <a name="orderByInput" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.orderByInput"></a>

```typescript
public readonly orderByInput: string;
```

- *Type:* string

---

##### `pageInput`<sup>Optional</sup> <a name="pageInput" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.pageInput"></a>

```typescript
public readonly pageInput: string;
```

- *Type:* string

---

##### `pageUrlInput`<sup>Optional</sup> <a name="pageUrlInput" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.pageUrlInput"></a>

```typescript
public readonly pageUrlInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `perPageInput`<sup>Optional</sup> <a name="perPageInput" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.perPageInput"></a>

```typescript
public readonly perPageInput: number;
```

- *Type:* number

---

##### `sameSiteInput`<sup>Optional</sup> <a name="sameSiteInput" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.sameSiteInput"></a>

```typescript
public readonly sameSiteInput: string;
```

- *Type:* string

---

##### `secureInput`<sup>Optional</sup> <a name="secureInput" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.secureInput"></a>

```typescript
public readonly secureInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `export`<sup>Required</sup> <a name="export" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.export"></a>

```typescript
public readonly export: string;
```

- *Type:* string

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.hosts"></a>

```typescript
public readonly hosts: string;
```

- *Type:* string

---

##### `httpOnly`<sup>Required</sup> <a name="httpOnly" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.httpOnly"></a>

```typescript
public readonly httpOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `orderBy`<sup>Required</sup> <a name="orderBy" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.orderBy"></a>

```typescript
public readonly orderBy: string;
```

- *Type:* string

---

##### `page`<sup>Required</sup> <a name="page" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.page"></a>

```typescript
public readonly page: string;
```

- *Type:* string

---

##### `pageUrl`<sup>Required</sup> <a name="pageUrl" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.pageUrl"></a>

```typescript
public readonly pageUrl: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `perPage`<sup>Required</sup> <a name="perPage" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.perPage"></a>

```typescript
public readonly perPage: number;
```

- *Type:* number

---

##### `sameSite`<sup>Required</sup> <a name="sameSite" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.sameSite"></a>

```typescript
public readonly sameSite: string;
```

- *Type:* string

---

##### `secure`<sup>Required</sup> <a name="secure" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.secure"></a>

```typescript
public readonly secure: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflarePageShieldCookiesListConfig <a name="DataCloudflarePageShieldCookiesListConfig" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.Initializer"></a>

```typescript
import { dataCloudflarePageShieldCookiesList } from '@cdktn/provider-cloudflare'

const dataCloudflarePageShieldCookiesListConfig: dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.zoneId">zoneId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.direction">direction</a></code> | <code>string</code> | The direction used to sort returned cookies.' Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.domain">domain</a></code> | <code>string</code> | Filters the returned cookies that match the specified domain attribute. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.export">export</a></code> | <code>string</code> | Export the list of cookies as a file, limited to 50000 entries. Available values: "csv". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.hosts">hosts</a></code> | <code>string</code> | Includes cookies that match one or more URL-encoded hostnames separated by commas. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.httpOnly">httpOnly</a></code> | <code>boolean \| cdktn.IResolvable</code> | Filters the returned cookies that are set with HttpOnly. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.maxItems">maxItems</a></code> | <code>number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.name">name</a></code> | <code>string</code> | Filters the returned cookies that match the specified name. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.orderBy">orderBy</a></code> | <code>string</code> | The field used to sort returned cookies. Available values: "first_seen_at", "last_seen_at". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.page">page</a></code> | <code>string</code> | The current page number of the paginated results. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.pageUrl">pageUrl</a></code> | <code>string</code> | Includes connections that match one or more page URLs (separated by commas) where they were last seen. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.path">path</a></code> | <code>string</code> | Filters the returned cookies that match the specified path attribute. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.perPage">perPage</a></code> | <code>number</code> | The number of results per page. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.sameSite">sameSite</a></code> | <code>string</code> | Filters the returned cookies that match the specified same_site attribute Available values: "lax", "strict", "none". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.secure">secure</a></code> | <code>boolean \| cdktn.IResolvable</code> | Filters the returned cookies that are set with Secure. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.type">type</a></code> | <code>string</code> | Filters the returned cookies that match the specified type attribute Available values: "first_party", "unknown". |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/page_shield_cookies_list#zone_id DataCloudflarePageShieldCookiesList#zone_id}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

The direction used to sort returned cookies.' Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/page_shield_cookies_list#direction DataCloudflarePageShieldCookiesList#direction}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

Filters the returned cookies that match the specified domain attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/page_shield_cookies_list#domain DataCloudflarePageShieldCookiesList#domain}

---

##### `export`<sup>Optional</sup> <a name="export" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.export"></a>

```typescript
public readonly export: string;
```

- *Type:* string

Export the list of cookies as a file, limited to 50000 entries. Available values: "csv".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/page_shield_cookies_list#export DataCloudflarePageShieldCookiesList#export}

---

##### `hosts`<sup>Optional</sup> <a name="hosts" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.hosts"></a>

```typescript
public readonly hosts: string;
```

- *Type:* string

Includes cookies that match one or more URL-encoded hostnames separated by commas.

Wildcards are supported at the start and end of each hostname to support starts with, ends with
and contains. If no wildcards are used, results will be filtered by exact match

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/page_shield_cookies_list#hosts DataCloudflarePageShieldCookiesList#hosts}

---

##### `httpOnly`<sup>Optional</sup> <a name="httpOnly" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.httpOnly"></a>

```typescript
public readonly httpOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Filters the returned cookies that are set with HttpOnly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/page_shield_cookies_list#http_only DataCloudflarePageShieldCookiesList#http_only}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/page_shield_cookies_list#max_items DataCloudflarePageShieldCookiesList#max_items}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Filters the returned cookies that match the specified name.

Wildcards are supported at the start and end to support starts with, ends with
and contains. e.g. session*

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/page_shield_cookies_list#name DataCloudflarePageShieldCookiesList#name}

---

##### `orderBy`<sup>Optional</sup> <a name="orderBy" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.orderBy"></a>

```typescript
public readonly orderBy: string;
```

- *Type:* string

The field used to sort returned cookies. Available values: "first_seen_at", "last_seen_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/page_shield_cookies_list#order_by DataCloudflarePageShieldCookiesList#order_by}

---

##### `page`<sup>Optional</sup> <a name="page" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.page"></a>

```typescript
public readonly page: string;
```

- *Type:* string

The current page number of the paginated results.

We additionally support a special value "all". When "all" is used, the API will return all the cookies
with the applied filters in a single page. This feature is best-effort and it may only work for zones with 
a low number of cookies

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/page_shield_cookies_list#page DataCloudflarePageShieldCookiesList#page}

---

##### `pageUrl`<sup>Optional</sup> <a name="pageUrl" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.pageUrl"></a>

```typescript
public readonly pageUrl: string;
```

- *Type:* string

Includes connections that match one or more page URLs (separated by commas) where they were last seen.

Wildcards are supported at the start and end of each page URL to support starts with, ends with
and contains. If no wildcards are used, results will be filtered by exact match

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/page_shield_cookies_list#page_url DataCloudflarePageShieldCookiesList#page_url}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Filters the returned cookies that match the specified path attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/page_shield_cookies_list#path DataCloudflarePageShieldCookiesList#path}

---

##### `perPage`<sup>Optional</sup> <a name="perPage" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.perPage"></a>

```typescript
public readonly perPage: number;
```

- *Type:* number

The number of results per page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/page_shield_cookies_list#per_page DataCloudflarePageShieldCookiesList#per_page}

---

##### `sameSite`<sup>Optional</sup> <a name="sameSite" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.sameSite"></a>

```typescript
public readonly sameSite: string;
```

- *Type:* string

Filters the returned cookies that match the specified same_site attribute Available values: "lax", "strict", "none".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/page_shield_cookies_list#same_site DataCloudflarePageShieldCookiesList#same_site}

---

##### `secure`<sup>Optional</sup> <a name="secure" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.secure"></a>

```typescript
public readonly secure: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Filters the returned cookies that are set with Secure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/page_shield_cookies_list#secure DataCloudflarePageShieldCookiesList#secure}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Filters the returned cookies that match the specified type attribute Available values: "first_party", "unknown".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/page_shield_cookies_list#type DataCloudflarePageShieldCookiesList#type}

---

### DataCloudflarePageShieldCookiesListResult <a name="DataCloudflarePageShieldCookiesListResult" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResult.Initializer"></a>

```typescript
import { dataCloudflarePageShieldCookiesList } from '@cdktn/provider-cloudflare'

const dataCloudflarePageShieldCookiesListResult: dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResult = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflarePageShieldCookiesListResultList <a name="DataCloudflarePageShieldCookiesListResultList" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.Initializer"></a>

```typescript
import { dataCloudflarePageShieldCookiesList } from '@cdktn/provider-cloudflare'

new dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.get"></a>

```typescript
public get(index: number): DataCloudflarePageShieldCookiesListResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflarePageShieldCookiesListResultOutputReference <a name="DataCloudflarePageShieldCookiesListResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.Initializer"></a>

```typescript
import { dataCloudflarePageShieldCookiesList } from '@cdktn/provider-cloudflare'

new dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.domainAttribute">domainAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.expiresAttribute">expiresAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.firstSeenAt">firstSeenAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.httpOnlyAttribute">httpOnlyAttribute</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.lastSeenAt">lastSeenAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.maxAgeAttribute">maxAgeAttribute</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.pageUrls">pageUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.pathAttribute">pathAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.sameSiteAttribute">sameSiteAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.secureAttribute">secureAttribute</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResult">DataCloudflarePageShieldCookiesListResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domainAttribute`<sup>Required</sup> <a name="domainAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.domainAttribute"></a>

```typescript
public readonly domainAttribute: string;
```

- *Type:* string

---

##### `expiresAttribute`<sup>Required</sup> <a name="expiresAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.expiresAttribute"></a>

```typescript
public readonly expiresAttribute: string;
```

- *Type:* string

---

##### `firstSeenAt`<sup>Required</sup> <a name="firstSeenAt" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.firstSeenAt"></a>

```typescript
public readonly firstSeenAt: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `httpOnlyAttribute`<sup>Required</sup> <a name="httpOnlyAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.httpOnlyAttribute"></a>

```typescript
public readonly httpOnlyAttribute: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastSeenAt`<sup>Required</sup> <a name="lastSeenAt" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.lastSeenAt"></a>

```typescript
public readonly lastSeenAt: string;
```

- *Type:* string

---

##### `maxAgeAttribute`<sup>Required</sup> <a name="maxAgeAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.maxAgeAttribute"></a>

```typescript
public readonly maxAgeAttribute: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `pageUrls`<sup>Required</sup> <a name="pageUrls" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.pageUrls"></a>

```typescript
public readonly pageUrls: string[];
```

- *Type:* string[]

---

##### `pathAttribute`<sup>Required</sup> <a name="pathAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.pathAttribute"></a>

```typescript
public readonly pathAttribute: string;
```

- *Type:* string

---

##### `sameSiteAttribute`<sup>Required</sup> <a name="sameSiteAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.sameSiteAttribute"></a>

```typescript
public readonly sameSiteAttribute: string;
```

- *Type:* string

---

##### `secureAttribute`<sup>Required</sup> <a name="secureAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.secureAttribute"></a>

```typescript
public readonly secureAttribute: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflarePageShieldCookiesListResult;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResult">DataCloudflarePageShieldCookiesListResult</a>

---



