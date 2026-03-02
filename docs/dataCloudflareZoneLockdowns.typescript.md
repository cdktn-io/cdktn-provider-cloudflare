# `dataCloudflareZoneLockdowns` Submodule <a name="`dataCloudflareZoneLockdowns` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZoneLockdowns <a name="DataCloudflareZoneLockdowns" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/zone_lockdowns cloudflare_zone_lockdowns}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer"></a>

```typescript
import { dataCloudflareZoneLockdowns } from '@cdktn/provider-cloudflare'

new dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns(scope: Construct, id: string, config: DataCloudflareZoneLockdownsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig">DataCloudflareZoneLockdownsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig">DataCloudflareZoneLockdownsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetCreatedOn">resetCreatedOn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetDescriptionSearch">resetDescriptionSearch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetIp">resetIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetIpRangeSearch">resetIpRangeSearch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetIpSearch">resetIpSearch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetMaxItems">resetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetModifiedOn">resetModifiedOn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetUriSearch">resetUriSearch</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetCreatedOn` <a name="resetCreatedOn" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetCreatedOn"></a>

```typescript
public resetCreatedOn(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDescriptionSearch` <a name="resetDescriptionSearch" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetDescriptionSearch"></a>

```typescript
public resetDescriptionSearch(): void
```

##### `resetIp` <a name="resetIp" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetIp"></a>

```typescript
public resetIp(): void
```

##### `resetIpRangeSearch` <a name="resetIpRangeSearch" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetIpRangeSearch"></a>

```typescript
public resetIpRangeSearch(): void
```

##### `resetIpSearch` <a name="resetIpSearch" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetIpSearch"></a>

```typescript
public resetIpSearch(): void
```

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetMaxItems"></a>

```typescript
public resetMaxItems(): void
```

##### `resetModifiedOn` <a name="resetModifiedOn" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetModifiedOn"></a>

```typescript
public resetModifiedOn(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetUriSearch` <a name="resetUriSearch" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetUriSearch"></a>

```typescript
public resetUriSearch(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareZoneLockdowns resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.isConstruct"></a>

```typescript
import { dataCloudflareZoneLockdowns } from '@cdktn/provider-cloudflare'

dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.isTerraformElement"></a>

```typescript
import { dataCloudflareZoneLockdowns } from '@cdktn/provider-cloudflare'

dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.isTerraformDataSource"></a>

```typescript
import { dataCloudflareZoneLockdowns } from '@cdktn/provider-cloudflare'

dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.generateConfigForImport"></a>

```typescript
import { dataCloudflareZoneLockdowns } from '@cdktn/provider-cloudflare'

dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflareZoneLockdowns resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareZoneLockdowns to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareZoneLockdowns that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/zone_lockdowns#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZoneLockdowns to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.result">result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList">DataCloudflareZoneLockdownsResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.createdOnInput">createdOnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.descriptionSearchInput">descriptionSearchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.ipInput">ipInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.ipRangeSearchInput">ipRangeSearchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.ipSearchInput">ipSearchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.maxItemsInput">maxItemsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.modifiedOnInput">modifiedOnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.uriSearchInput">uriSearchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.descriptionSearch">descriptionSearch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.ip">ip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.ipRangeSearch">ipRangeSearch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.ipSearch">ipSearch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.maxItems">maxItems</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.modifiedOn">modifiedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.uriSearch">uriSearch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.result"></a>

```typescript
public readonly result: DataCloudflareZoneLockdownsResultList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList">DataCloudflareZoneLockdownsResultList</a>

---

##### `createdOnInput`<sup>Optional</sup> <a name="createdOnInput" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.createdOnInput"></a>

```typescript
public readonly createdOnInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `descriptionSearchInput`<sup>Optional</sup> <a name="descriptionSearchInput" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.descriptionSearchInput"></a>

```typescript
public readonly descriptionSearchInput: string;
```

- *Type:* string

---

##### `ipInput`<sup>Optional</sup> <a name="ipInput" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.ipInput"></a>

```typescript
public readonly ipInput: string;
```

- *Type:* string

---

##### `ipRangeSearchInput`<sup>Optional</sup> <a name="ipRangeSearchInput" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.ipRangeSearchInput"></a>

```typescript
public readonly ipRangeSearchInput: string;
```

- *Type:* string

---

##### `ipSearchInput`<sup>Optional</sup> <a name="ipSearchInput" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.ipSearchInput"></a>

```typescript
public readonly ipSearchInput: string;
```

- *Type:* string

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.maxItemsInput"></a>

```typescript
public readonly maxItemsInput: number;
```

- *Type:* number

---

##### `modifiedOnInput`<sup>Optional</sup> <a name="modifiedOnInput" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.modifiedOnInput"></a>

```typescript
public readonly modifiedOnInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `uriSearchInput`<sup>Optional</sup> <a name="uriSearchInput" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.uriSearchInput"></a>

```typescript
public readonly uriSearchInput: string;
```

- *Type:* string

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `descriptionSearch`<sup>Required</sup> <a name="descriptionSearch" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.descriptionSearch"></a>

```typescript
public readonly descriptionSearch: string;
```

- *Type:* string

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.ip"></a>

```typescript
public readonly ip: string;
```

- *Type:* string

---

##### `ipRangeSearch`<sup>Required</sup> <a name="ipRangeSearch" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.ipRangeSearch"></a>

```typescript
public readonly ipRangeSearch: string;
```

- *Type:* string

---

##### `ipSearch`<sup>Required</sup> <a name="ipSearch" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.ipSearch"></a>

```typescript
public readonly ipSearch: string;
```

- *Type:* string

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

---

##### `modifiedOn`<sup>Required</sup> <a name="modifiedOn" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.modifiedOn"></a>

```typescript
public readonly modifiedOn: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `uriSearch`<sup>Required</sup> <a name="uriSearch" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.uriSearch"></a>

```typescript
public readonly uriSearch: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZoneLockdownsConfig <a name="DataCloudflareZoneLockdownsConfig" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.Initializer"></a>

```typescript
import { dataCloudflareZoneLockdowns } from '@cdktn/provider-cloudflare'

const dataCloudflareZoneLockdownsConfig: dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.zoneId">zoneId</a></code> | <code>string</code> | Defines an identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.createdOn">createdOn</a></code> | <code>string</code> | The timestamp of when the rule was created. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.description">description</a></code> | <code>string</code> | A string to search for in the description of existing rules. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.descriptionSearch">descriptionSearch</a></code> | <code>string</code> | A string to search for in the description of existing rules. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.ip">ip</a></code> | <code>string</code> | A single IP address to search for in existing rules. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.ipRangeSearch">ipRangeSearch</a></code> | <code>string</code> | A single IP address range to search for in existing rules. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.ipSearch">ipSearch</a></code> | <code>string</code> | A single IP address to search for in existing rules. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.maxItems">maxItems</a></code> | <code>number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.modifiedOn">modifiedOn</a></code> | <code>string</code> | The timestamp of when the rule was last modified. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.priority">priority</a></code> | <code>number</code> | The priority of the rule to control the processing order. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.uriSearch">uriSearch</a></code> | <code>string</code> | A single URI to search for in the list of URLs of existing rules. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

Defines an identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/zone_lockdowns#zone_id DataCloudflareZoneLockdowns#zone_id}

---

##### `createdOn`<sup>Optional</sup> <a name="createdOn" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

The timestamp of when the rule was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/zone_lockdowns#created_on DataCloudflareZoneLockdowns#created_on}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A string to search for in the description of existing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/zone_lockdowns#description DataCloudflareZoneLockdowns#description}

---

##### `descriptionSearch`<sup>Optional</sup> <a name="descriptionSearch" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.descriptionSearch"></a>

```typescript
public readonly descriptionSearch: string;
```

- *Type:* string

A string to search for in the description of existing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/zone_lockdowns#description_search DataCloudflareZoneLockdowns#description_search}

---

##### `ip`<sup>Optional</sup> <a name="ip" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.ip"></a>

```typescript
public readonly ip: string;
```

- *Type:* string

A single IP address to search for in existing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/zone_lockdowns#ip DataCloudflareZoneLockdowns#ip}

---

##### `ipRangeSearch`<sup>Optional</sup> <a name="ipRangeSearch" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.ipRangeSearch"></a>

```typescript
public readonly ipRangeSearch: string;
```

- *Type:* string

A single IP address range to search for in existing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/zone_lockdowns#ip_range_search DataCloudflareZoneLockdowns#ip_range_search}

---

##### `ipSearch`<sup>Optional</sup> <a name="ipSearch" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.ipSearch"></a>

```typescript
public readonly ipSearch: string;
```

- *Type:* string

A single IP address to search for in existing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/zone_lockdowns#ip_search DataCloudflareZoneLockdowns#ip_search}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/zone_lockdowns#max_items DataCloudflareZoneLockdowns#max_items}

---

##### `modifiedOn`<sup>Optional</sup> <a name="modifiedOn" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.modifiedOn"></a>

```typescript
public readonly modifiedOn: string;
```

- *Type:* string

The timestamp of when the rule was last modified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/zone_lockdowns#modified_on DataCloudflareZoneLockdowns#modified_on}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

The priority of the rule to control the processing order.

A lower number indicates higher priority. If not provided, any rules with a configured priority will be processed before rules without a priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/zone_lockdowns#priority DataCloudflareZoneLockdowns#priority}

---

##### `uriSearch`<sup>Optional</sup> <a name="uriSearch" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.uriSearch"></a>

```typescript
public readonly uriSearch: string;
```

- *Type:* string

A single URI to search for in the list of URLs of existing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/zone_lockdowns#uri_search DataCloudflareZoneLockdowns#uri_search}

---

### DataCloudflareZoneLockdownsResult <a name="DataCloudflareZoneLockdownsResult" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResult.Initializer"></a>

```typescript
import { dataCloudflareZoneLockdowns } from '@cdktn/provider-cloudflare'

const dataCloudflareZoneLockdownsResult: dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResult = { ... }
```


### DataCloudflareZoneLockdownsResultConfigurations <a name="DataCloudflareZoneLockdownsResultConfigurations" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurations.Initializer"></a>

```typescript
import { dataCloudflareZoneLockdowns } from '@cdktn/provider-cloudflare'

const dataCloudflareZoneLockdownsResultConfigurations: dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurations = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZoneLockdownsResultConfigurationsList <a name="DataCloudflareZoneLockdownsResultConfigurationsList" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.Initializer"></a>

```typescript
import { dataCloudflareZoneLockdowns } from '@cdktn/provider-cloudflare'

new dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.get"></a>

```typescript
public get(index: number): DataCloudflareZoneLockdownsResultConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareZoneLockdownsResultConfigurationsOutputReference <a name="DataCloudflareZoneLockdownsResultConfigurationsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.Initializer"></a>

```typescript
import { dataCloudflareZoneLockdowns } from '@cdktn/provider-cloudflare'

new dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.property.target">target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurations">DataCloudflareZoneLockdownsResultConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareZoneLockdownsResultConfigurations;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurations">DataCloudflareZoneLockdownsResultConfigurations</a>

---


### DataCloudflareZoneLockdownsResultList <a name="DataCloudflareZoneLockdownsResultList" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.Initializer"></a>

```typescript
import { dataCloudflareZoneLockdowns } from '@cdktn/provider-cloudflare'

new dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.get"></a>

```typescript
public get(index: number): DataCloudflareZoneLockdownsResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareZoneLockdownsResultOutputReference <a name="DataCloudflareZoneLockdownsResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.Initializer"></a>

```typescript
import { dataCloudflareZoneLockdowns } from '@cdktn/provider-cloudflare'

new dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.property.configurations">configurations</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList">DataCloudflareZoneLockdownsResultConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.property.modifiedOn">modifiedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.property.paused">paused</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.property.urls">urls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResult">DataCloudflareZoneLockdownsResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `configurations`<sup>Required</sup> <a name="configurations" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.property.configurations"></a>

```typescript
public readonly configurations: DataCloudflareZoneLockdownsResultConfigurationsList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList">DataCloudflareZoneLockdownsResultConfigurationsList</a>

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `modifiedOn`<sup>Required</sup> <a name="modifiedOn" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.property.modifiedOn"></a>

```typescript
public readonly modifiedOn: string;
```

- *Type:* string

---

##### `paused`<sup>Required</sup> <a name="paused" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.property.paused"></a>

```typescript
public readonly paused: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `urls`<sup>Required</sup> <a name="urls" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.property.urls"></a>

```typescript
public readonly urls: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareZoneLockdownsResult;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResult">DataCloudflareZoneLockdownsResult</a>

---



