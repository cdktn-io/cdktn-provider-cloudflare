# `dataCloudflareZeroTrustResourceLibraryApplications` Submodule <a name="`dataCloudflareZeroTrustResourceLibraryApplications` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustResourceLibraryApplications <a name="DataCloudflareZeroTrustResourceLibraryApplications" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_resource_library_applications cloudflare_zero_trust_resource_library_applications}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustResourceLibraryApplications } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications(scope: Construct, id: string, config: DataCloudflareZeroTrustResourceLibraryApplicationsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsConfig">DataCloudflareZeroTrustResourceLibraryApplicationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsConfig">DataCloudflareZeroTrustResourceLibraryApplicationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.resetLimit">resetLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.resetMaxItems">resetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.resetOffset">resetOffset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.resetOrderBy">resetOrderBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.resetSearch">resetSearch</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetLimit` <a name="resetLimit" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.resetLimit"></a>

```typescript
public resetLimit(): void
```

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.resetMaxItems"></a>

```typescript
public resetMaxItems(): void
```

##### `resetOffset` <a name="resetOffset" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.resetOffset"></a>

```typescript
public resetOffset(): void
```

##### `resetOrderBy` <a name="resetOrderBy" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.resetOrderBy"></a>

```typescript
public resetOrderBy(): void
```

##### `resetSearch` <a name="resetSearch" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.resetSearch"></a>

```typescript
public resetSearch(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustResourceLibraryApplications resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.isConstruct"></a>

```typescript
import { dataCloudflareZeroTrustResourceLibraryApplications } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.isTerraformElement"></a>

```typescript
import { dataCloudflareZeroTrustResourceLibraryApplications } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.isTerraformDataSource"></a>

```typescript
import { dataCloudflareZeroTrustResourceLibraryApplications } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.generateConfigForImport"></a>

```typescript
import { dataCloudflareZeroTrustResourceLibraryApplications } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflareZeroTrustResourceLibraryApplications resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareZeroTrustResourceLibraryApplications to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareZeroTrustResourceLibraryApplications that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_resource_library_applications#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustResourceLibraryApplications to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.result">result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultList">DataCloudflareZeroTrustResourceLibraryApplicationsResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.filterInput">filterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.limitInput">limitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.maxItemsInput">maxItemsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.offsetInput">offsetInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.orderByInput">orderByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.searchInput">searchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.filter">filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.limit">limit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.maxItems">maxItems</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.offset">offset</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.orderBy">orderBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.search">search</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.result"></a>

```typescript
public readonly result: DataCloudflareZeroTrustResourceLibraryApplicationsResultList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultList">DataCloudflareZeroTrustResourceLibraryApplicationsResultList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.filterInput"></a>

```typescript
public readonly filterInput: string;
```

- *Type:* string

---

##### `limitInput`<sup>Optional</sup> <a name="limitInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.limitInput"></a>

```typescript
public readonly limitInput: number;
```

- *Type:* number

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.maxItemsInput"></a>

```typescript
public readonly maxItemsInput: number;
```

- *Type:* number

---

##### `offsetInput`<sup>Optional</sup> <a name="offsetInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.offsetInput"></a>

```typescript
public readonly offsetInput: number;
```

- *Type:* number

---

##### `orderByInput`<sup>Optional</sup> <a name="orderByInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.orderByInput"></a>

```typescript
public readonly orderByInput: string;
```

- *Type:* string

---

##### `searchInput`<sup>Optional</sup> <a name="searchInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.searchInput"></a>

```typescript
public readonly searchInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.limit"></a>

```typescript
public readonly limit: number;
```

- *Type:* number

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

---

##### `offset`<sup>Required</sup> <a name="offset" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.offset"></a>

```typescript
public readonly offset: number;
```

- *Type:* number

---

##### `orderBy`<sup>Required</sup> <a name="orderBy" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.orderBy"></a>

```typescript
public readonly orderBy: string;
```

- *Type:* string

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.search"></a>

```typescript
public readonly search: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustResourceLibraryApplicationsConfig <a name="DataCloudflareZeroTrustResourceLibraryApplicationsConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsConfig.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustResourceLibraryApplications } from '@cdktn/provider-cloudflare'

const dataCloudflareZeroTrustResourceLibraryApplicationsConfig: dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_resource_library_applications#account_id DataCloudflareZeroTrustResourceLibraryApplications#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsConfig.property.filter">filter</a></code> | <code>string</code> | Filter applications using key:value format. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsConfig.property.limit">limit</a></code> | <code>number</code> | Limit of number of results to return (max 250). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsConfig.property.maxItems">maxItems</a></code> | <code>number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsConfig.property.offset">offset</a></code> | <code>number</code> | Offset of results to return. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsConfig.property.orderBy">orderBy</a></code> | <code>string</code> | Order results by field name and direction (e.g., name:asc). Ignored when search is provided; results are ranked by relevance instead. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsConfig.property.search">search</a></code> | <code>string</code> | Fuzzy search across application name and hostnames. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_resource_library_applications#account_id DataCloudflareZeroTrustResourceLibraryApplications#account_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsConfig.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

Filter applications using key:value format.

Supported filter keys:
- name: Filter by application name (e.g., name:HR)
- id: Filter by application ID (e.g., id:0b63249c-95bf-4cc0-a7cc-d7faaaf1dac0)
- human_id: Filter by human-readable ID (e.g., human_id:HR)
- hostname: Filter by hostname or support domain (e.g., hostname:portal.example.com)
- source: Filter by application source name (e.g., source:cloudflare)
- ip_subnet: Filter by IP subnet using CIDR containment — returns applications where any stored subnet contains the search value (e.g., ip_subnet:10.0.1.5/32 matches apps with 10.0.0.0/16)
- intel_id: Filter by Intel API ID (e.g., intel_id:498). also supports multiple values (e.g., intel_id:498,1001)
- category_id: Filter by category ID (e.g., category_id:37f8ec03-8766-49d4-9a15-369b044c842c).
- category_name: Filter by category name (e.g., category_name:HR).
- supported: Filter by supported Cloudflare product (e.g., supported:ACCESS). Values: GATEWAY, ACCESS, CASB.
.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_resource_library_applications#filter DataCloudflareZeroTrustResourceLibraryApplications#filter}

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsConfig.property.limit"></a>

```typescript
public readonly limit: number;
```

- *Type:* number

Limit of number of results to return (max 250).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_resource_library_applications#limit DataCloudflareZeroTrustResourceLibraryApplications#limit}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsConfig.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_resource_library_applications#max_items DataCloudflareZeroTrustResourceLibraryApplications#max_items}

---

##### `offset`<sup>Optional</sup> <a name="offset" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsConfig.property.offset"></a>

```typescript
public readonly offset: number;
```

- *Type:* number

Offset of results to return.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_resource_library_applications#offset DataCloudflareZeroTrustResourceLibraryApplications#offset}

---

##### `orderBy`<sup>Optional</sup> <a name="orderBy" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsConfig.property.orderBy"></a>

```typescript
public readonly orderBy: string;
```

- *Type:* string

Order results by field name and direction (e.g., name:asc). Ignored when search is provided; results are ranked by relevance instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_resource_library_applications#order_by DataCloudflareZeroTrustResourceLibraryApplications#order_by}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsConfig.property.search"></a>

```typescript
public readonly search: string;
```

- *Type:* string

Fuzzy search across application name and hostnames.

Results are ranked by relevance. Must be between 2 and 200 characters. Can be combined with filter parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_resource_library_applications#search DataCloudflareZeroTrustResourceLibraryApplications#search}

---

### DataCloudflareZeroTrustResourceLibraryApplicationsResult <a name="DataCloudflareZeroTrustResourceLibraryApplicationsResult" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResult.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustResourceLibraryApplications } from '@cdktn/provider-cloudflare'

const dataCloudflareZeroTrustResourceLibraryApplicationsResult: dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResult = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustResourceLibraryApplicationsResultList <a name="DataCloudflareZeroTrustResourceLibraryApplicationsResultList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultList.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustResourceLibraryApplications } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultList.get"></a>

```typescript
public get(index: number): DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference <a name="DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustResourceLibraryApplications } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.applicationConfidenceScore">applicationConfidenceScore</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.applicationScoreComposition">applicationScoreComposition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.applicationSource">applicationSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.applicationType">applicationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.applicationTypeDescription">applicationTypeDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.genAiScore">genAiScore</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.hostnames">hostnames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.humanId">humanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.intelId">intelId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.ipSubnets">ipSubnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.portProtocols">portProtocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.supportDomains">supportDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.supported">supported</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResult">DataCloudflareZeroTrustResourceLibraryApplicationsResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applicationConfidenceScore`<sup>Required</sup> <a name="applicationConfidenceScore" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.applicationConfidenceScore"></a>

```typescript
public readonly applicationConfidenceScore: number;
```

- *Type:* number

---

##### `applicationScoreComposition`<sup>Required</sup> <a name="applicationScoreComposition" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.applicationScoreComposition"></a>

```typescript
public readonly applicationScoreComposition: string;
```

- *Type:* string

---

##### `applicationSource`<sup>Required</sup> <a name="applicationSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.applicationSource"></a>

```typescript
public readonly applicationSource: string;
```

- *Type:* string

---

##### `applicationType`<sup>Required</sup> <a name="applicationType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.applicationType"></a>

```typescript
public readonly applicationType: string;
```

- *Type:* string

---

##### `applicationTypeDescription`<sup>Required</sup> <a name="applicationTypeDescription" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.applicationTypeDescription"></a>

```typescript
public readonly applicationTypeDescription: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `genAiScore`<sup>Required</sup> <a name="genAiScore" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.genAiScore"></a>

```typescript
public readonly genAiScore: number;
```

- *Type:* number

---

##### `hostnames`<sup>Required</sup> <a name="hostnames" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.hostnames"></a>

```typescript
public readonly hostnames: string[];
```

- *Type:* string[]

---

##### `humanId`<sup>Required</sup> <a name="humanId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.humanId"></a>

```typescript
public readonly humanId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `intelId`<sup>Required</sup> <a name="intelId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.intelId"></a>

```typescript
public readonly intelId: number;
```

- *Type:* number

---

##### `ipSubnets`<sup>Required</sup> <a name="ipSubnets" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.ipSubnets"></a>

```typescript
public readonly ipSubnets: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `portProtocols`<sup>Required</sup> <a name="portProtocols" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.portProtocols"></a>

```typescript
public readonly portProtocols: string[];
```

- *Type:* string[]

---

##### `supportDomains`<sup>Required</sup> <a name="supportDomains" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.supportDomains"></a>

```typescript
public readonly supportDomains: string[];
```

- *Type:* string[]

---

##### `supported`<sup>Required</sup> <a name="supported" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.supported"></a>

```typescript
public readonly supported: string[];
```

- *Type:* string[]

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareZeroTrustResourceLibraryApplicationsResult;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResult">DataCloudflareZeroTrustResourceLibraryApplicationsResult</a>

---



