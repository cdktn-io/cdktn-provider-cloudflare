# `dataCloudflareZeroTrustResourceLibraryApplication` Submodule <a name="`dataCloudflareZeroTrustResourceLibraryApplication` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustResourceLibraryApplication <a name="DataCloudflareZeroTrustResourceLibraryApplication" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/zero_trust_resource_library_application cloudflare_zero_trust_resource_library_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustResourceLibraryApplication } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication(scope: Construct, id: string, config: DataCloudflareZeroTrustResourceLibraryApplicationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationConfig">DataCloudflareZeroTrustResourceLibraryApplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationConfig">DataCloudflareZeroTrustResourceLibraryApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.putFilter"></a>

```typescript
public putFilter(value: DataCloudflareZeroTrustResourceLibraryApplicationFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilter">DataCloudflareZeroTrustResourceLibraryApplicationFilter</a>

---

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustResourceLibraryApplication resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.isConstruct"></a>

```typescript
import { dataCloudflareZeroTrustResourceLibraryApplication } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.isTerraformElement"></a>

```typescript
import { dataCloudflareZeroTrustResourceLibraryApplication } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.isTerraformDataSource"></a>

```typescript
import { dataCloudflareZeroTrustResourceLibraryApplication } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.generateConfigForImport"></a>

```typescript
import { dataCloudflareZeroTrustResourceLibraryApplication } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflareZeroTrustResourceLibraryApplication resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareZeroTrustResourceLibraryApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareZeroTrustResourceLibraryApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/zero_trust_resource_library_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustResourceLibraryApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.applicationConfidenceScore">applicationConfidenceScore</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.applicationScoreComposition">applicationScoreComposition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.applicationSource">applicationSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.applicationType">applicationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.applicationTypeDescription">applicationTypeDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.categoryId">categoryId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference">DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.genAiScore">genAiScore</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.hostnames">hostnames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.humanId">humanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.ipSubnets">ipSubnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.portProtocols">portProtocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.supportDomains">supportDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.supported">supported</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.filterInput">filterInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilter">DataCloudflareZeroTrustResourceLibraryApplicationFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.idInput">idInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.id">id</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `applicationConfidenceScore`<sup>Required</sup> <a name="applicationConfidenceScore" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.applicationConfidenceScore"></a>

```typescript
public readonly applicationConfidenceScore: number;
```

- *Type:* number

---

##### `applicationScoreComposition`<sup>Required</sup> <a name="applicationScoreComposition" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.applicationScoreComposition"></a>

```typescript
public readonly applicationScoreComposition: string;
```

- *Type:* string

---

##### `applicationSource`<sup>Required</sup> <a name="applicationSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.applicationSource"></a>

```typescript
public readonly applicationSource: string;
```

- *Type:* string

---

##### `applicationType`<sup>Required</sup> <a name="applicationType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.applicationType"></a>

```typescript
public readonly applicationType: string;
```

- *Type:* string

---

##### `applicationTypeDescription`<sup>Required</sup> <a name="applicationTypeDescription" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.applicationTypeDescription"></a>

```typescript
public readonly applicationTypeDescription: string;
```

- *Type:* string

---

##### `categoryId`<sup>Required</sup> <a name="categoryId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.categoryId"></a>

```typescript
public readonly categoryId: number;
```

- *Type:* number

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.filter"></a>

```typescript
public readonly filter: DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference">DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference</a>

---

##### `genAiScore`<sup>Required</sup> <a name="genAiScore" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.genAiScore"></a>

```typescript
public readonly genAiScore: number;
```

- *Type:* number

---

##### `hostnames`<sup>Required</sup> <a name="hostnames" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.hostnames"></a>

```typescript
public readonly hostnames: string[];
```

- *Type:* string[]

---

##### `humanId`<sup>Required</sup> <a name="humanId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.humanId"></a>

```typescript
public readonly humanId: string;
```

- *Type:* string

---

##### `ipSubnets`<sup>Required</sup> <a name="ipSubnets" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.ipSubnets"></a>

```typescript
public readonly ipSubnets: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `portProtocols`<sup>Required</sup> <a name="portProtocols" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.portProtocols"></a>

```typescript
public readonly portProtocols: string[];
```

- *Type:* string[]

---

##### `supportDomains`<sup>Required</sup> <a name="supportDomains" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.supportDomains"></a>

```typescript
public readonly supportDomains: string[];
```

- *Type:* string[]

---

##### `supported`<sup>Required</sup> <a name="supported" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.supported"></a>

```typescript
public readonly supported: string[];
```

- *Type:* string[]

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataCloudflareZeroTrustResourceLibraryApplicationFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilter">DataCloudflareZeroTrustResourceLibraryApplicationFilter</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.idInput"></a>

```typescript
public readonly idInput: number;
```

- *Type:* number

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustResourceLibraryApplicationConfig <a name="DataCloudflareZeroTrustResourceLibraryApplicationConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationConfig.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustResourceLibraryApplication } from '@cdktn/provider-cloudflare'

const dataCloudflareZeroTrustResourceLibraryApplicationConfig: dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/zero_trust_resource_library_application#account_id DataCloudflareZeroTrustResourceLibraryApplication#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationConfig.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilter">DataCloudflareZeroTrustResourceLibraryApplicationFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/zero_trust_resource_library_application#filter DataCloudflareZeroTrustResourceLibraryApplication#filter}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationConfig.property.id">id</a></code> | <code>number</code> | Returns the application ID. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/zero_trust_resource_library_application#account_id DataCloudflareZeroTrustResourceLibraryApplication#account_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationConfig.property.filter"></a>

```typescript
public readonly filter: DataCloudflareZeroTrustResourceLibraryApplicationFilter;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilter">DataCloudflareZeroTrustResourceLibraryApplicationFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/zero_trust_resource_library_application#filter DataCloudflareZeroTrustResourceLibraryApplication#filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationConfig.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

Returns the application ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/zero_trust_resource_library_application#id DataCloudflareZeroTrustResourceLibraryApplication#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataCloudflareZeroTrustResourceLibraryApplicationFilter <a name="DataCloudflareZeroTrustResourceLibraryApplicationFilter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilter.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustResourceLibraryApplication } from '@cdktn/provider-cloudflare'

const dataCloudflareZeroTrustResourceLibraryApplicationFilter: dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilter.property.fields">fields</a></code> | <code>string</code> | Return only the listed properties on each application, as a comma-separated list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilter.property.filter">filter</a></code> | <code>string</code> | Filter applications using key:value format. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilter.property.limit">limit</a></code> | <code>number</code> | Limit of number of results to return (max 250). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilter.property.offset">offset</a></code> | <code>number</code> | Offset of results to return. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilter.property.orderBy">orderBy</a></code> | <code>string</code> | Order results using field:direction format. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilter.property.search">search</a></code> | <code>string</code> | Fuzzy search across application name and hostnames. |

---

##### `fields`<sup>Optional</sup> <a name="fields" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilter.property.fields"></a>

```typescript
public readonly fields: string;
```

- *Type:* string

Return only the listed properties on each application, as a comma-separated list.

Use this to keep responses small when you only need part of each application — for
example populating a picker with `fields=id,name` instead of downloading every
hostname and IP subnet.

Omit this parameter to receive the full application object.

`id` is always returned.

Selectable properties: `id`, `name`, `human_id`, `version`, `hostnames`,
`support_domains`, `ip_subnets`, `port_protocols`, `supported`, `gen_ai_score`,
`application_confidence_score`, `created_at`, `updated_at`, `review_status`.

Unknown or empty property names return `400`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/zero_trust_resource_library_application#fields DataCloudflareZeroTrustResourceLibraryApplication#fields}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilter.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

Filter applications using key:value format.

Supported filter keys:
- name: Filter by application name (e.g., name:HR)
- id: Filter by application ID (e.g., id:498)
- human_id: Filter by human-readable ID (e.g., human_id:HR)
- hostname: Filter by hostname or support domain (e.g., hostname:portal.example.com)
- source: Filter by application source name (e.g., source:cloudflare)
- ip_subnet: Filter by IP subnet using CIDR containment — returns applications where any stored subnet contains the search value (e.g., ip_subnet:10.0.1.5/32 matches apps with 10.0.0.0/16)
- category_id: Filter by category ID (e.g., category_id:12).
- category_name: Filter by category name (e.g., category_name:HR).
- supported: Filter by supported Cloudflare product (e.g., supported:ACCESS). Values: GATEWAY, ACCESS, CASB.
- review_status: Filter by the account's Gateway review status. Values: approved, unapproved, in_review, unreviewed.
.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/zero_trust_resource_library_application#filter DataCloudflareZeroTrustResourceLibraryApplication#filter}

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilter.property.limit"></a>

```typescript
public readonly limit: number;
```

- *Type:* number

Limit of number of results to return (max 250).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/zero_trust_resource_library_application#limit DataCloudflareZeroTrustResourceLibraryApplication#limit}

---

##### `offset`<sup>Optional</sup> <a name="offset" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilter.property.offset"></a>

```typescript
public readonly offset: number;
```

- *Type:* number

Offset of results to return.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/zero_trust_resource_library_application#offset DataCloudflareZeroTrustResourceLibraryApplication#offset}

---

##### `orderBy`<sup>Optional</sup> <a name="orderBy" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilter.property.orderBy"></a>

```typescript
public readonly orderBy: string;
```

- *Type:* string

Order results using field:direction format.

Supported fields are name, id, human_id,
category_id, application_type, application_confidence_score, and gen_ai_score.
Supported directions are asc and desc. Ignored when search is provided; results are
ranked by relevance instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/zero_trust_resource_library_application#order_by DataCloudflareZeroTrustResourceLibraryApplication#order_by}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilter.property.search"></a>

```typescript
public readonly search: string;
```

- *Type:* string

Fuzzy search across application name and hostnames.

Results are ranked by relevance. Must be between 2 and 200 characters. Can be combined with filter parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/zero_trust_resource_library_application#search DataCloudflareZeroTrustResourceLibraryApplication#search}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference <a name="DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustResourceLibraryApplication } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.resetFields">resetFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.resetLimit">resetLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.resetOffset">resetOffset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.resetOrderBy">resetOrderBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.resetSearch">resetSearch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFields` <a name="resetFields" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.resetFields"></a>

```typescript
public resetFields(): void
```

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetLimit` <a name="resetLimit" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.resetLimit"></a>

```typescript
public resetLimit(): void
```

##### `resetOffset` <a name="resetOffset" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.resetOffset"></a>

```typescript
public resetOffset(): void
```

##### `resetOrderBy` <a name="resetOrderBy" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.resetOrderBy"></a>

```typescript
public resetOrderBy(): void
```

##### `resetSearch` <a name="resetSearch" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.resetSearch"></a>

```typescript
public resetSearch(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.property.fieldsInput">fieldsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.property.filterInput">filterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.property.limitInput">limitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.property.offsetInput">offsetInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.property.orderByInput">orderByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.property.searchInput">searchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.property.fields">fields</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.property.filter">filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.property.limit">limit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.property.offset">offset</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.property.orderBy">orderBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.property.search">search</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilter">DataCloudflareZeroTrustResourceLibraryApplicationFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fieldsInput`<sup>Optional</sup> <a name="fieldsInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.property.fieldsInput"></a>

```typescript
public readonly fieldsInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.property.filterInput"></a>

```typescript
public readonly filterInput: string;
```

- *Type:* string

---

##### `limitInput`<sup>Optional</sup> <a name="limitInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.property.limitInput"></a>

```typescript
public readonly limitInput: number;
```

- *Type:* number

---

##### `offsetInput`<sup>Optional</sup> <a name="offsetInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.property.offsetInput"></a>

```typescript
public readonly offsetInput: number;
```

- *Type:* number

---

##### `orderByInput`<sup>Optional</sup> <a name="orderByInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.property.orderByInput"></a>

```typescript
public readonly orderByInput: string;
```

- *Type:* string

---

##### `searchInput`<sup>Optional</sup> <a name="searchInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.property.searchInput"></a>

```typescript
public readonly searchInput: string;
```

- *Type:* string

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.property.fields"></a>

```typescript
public readonly fields: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.property.limit"></a>

```typescript
public readonly limit: number;
```

- *Type:* number

---

##### `offset`<sup>Required</sup> <a name="offset" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.property.offset"></a>

```typescript
public readonly offset: number;
```

- *Type:* number

---

##### `orderBy`<sup>Required</sup> <a name="orderBy" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.property.orderBy"></a>

```typescript
public readonly orderBy: string;
```

- *Type:* string

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.property.search"></a>

```typescript
public readonly search: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataCloudflareZeroTrustResourceLibraryApplicationFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilter">DataCloudflareZeroTrustResourceLibraryApplicationFilter</a>

---



