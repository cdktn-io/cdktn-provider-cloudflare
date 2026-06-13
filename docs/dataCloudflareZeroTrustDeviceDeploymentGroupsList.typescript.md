# `dataCloudflareZeroTrustDeviceDeploymentGroupsList` Submodule <a name="`dataCloudflareZeroTrustDeviceDeploymentGroupsList` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustDeviceDeploymentGroupsList <a name="DataCloudflareZeroTrustDeviceDeploymentGroupsList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/zero_trust_device_deployment_groups_list cloudflare_zero_trust_device_deployment_groups_list}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDeviceDeploymentGroupsList } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList(scope: Construct, id: string, config: DataCloudflareZeroTrustDeviceDeploymentGroupsListConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListConfig">DataCloudflareZeroTrustDeviceDeploymentGroupsListConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListConfig">DataCloudflareZeroTrustDeviceDeploymentGroupsListConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.resetMaxItems">resetMaxItems</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.resetMaxItems"></a>

```typescript
public resetMaxItems(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustDeviceDeploymentGroupsList resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.isConstruct"></a>

```typescript
import { dataCloudflareZeroTrustDeviceDeploymentGroupsList } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.isTerraformElement"></a>

```typescript
import { dataCloudflareZeroTrustDeviceDeploymentGroupsList } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.isTerraformDataSource"></a>

```typescript
import { dataCloudflareZeroTrustDeviceDeploymentGroupsList } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.generateConfigForImport"></a>

```typescript
import { dataCloudflareZeroTrustDeviceDeploymentGroupsList } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflareZeroTrustDeviceDeploymentGroupsList resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareZeroTrustDeviceDeploymentGroupsList to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareZeroTrustDeviceDeploymentGroupsList that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/zero_trust_device_deployment_groups_list#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustDeviceDeploymentGroupsList to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.result">result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList">DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.maxItemsInput">maxItemsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.maxItems">maxItems</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.result"></a>

```typescript
public readonly result: DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList">DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.maxItemsInput"></a>

```typescript
public readonly maxItemsInput: number;
```

- *Type:* number

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsList.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustDeviceDeploymentGroupsListConfig <a name="DataCloudflareZeroTrustDeviceDeploymentGroupsListConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListConfig.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDeviceDeploymentGroupsList } from '@cdktn/provider-cloudflare'

const dataCloudflareZeroTrustDeviceDeploymentGroupsListConfig: dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/zero_trust_device_deployment_groups_list#account_id DataCloudflareZeroTrustDeviceDeploymentGroupsList#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListConfig.property.maxItems">maxItems</a></code> | <code>number</code> | Max items to fetch, default: 1000. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/zero_trust_device_deployment_groups_list#account_id DataCloudflareZeroTrustDeviceDeploymentGroupsList#account_id}.

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListConfig.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/zero_trust_device_deployment_groups_list#max_items DataCloudflareZeroTrustDeviceDeploymentGroupsList#max_items}

---

### DataCloudflareZeroTrustDeviceDeploymentGroupsListResult <a name="DataCloudflareZeroTrustDeviceDeploymentGroupsListResult" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResult.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDeviceDeploymentGroupsList } from '@cdktn/provider-cloudflare'

const dataCloudflareZeroTrustDeviceDeploymentGroupsListResult: dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResult = { ... }
```


### DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfig <a name="DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfig.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDeviceDeploymentGroupsList } from '@cdktn/provider-cloudflare'

const dataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfig: dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfig = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList <a name="DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDeviceDeploymentGroupsList } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList.get"></a>

```typescript
public get(index: number): DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference <a name="DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDeviceDeploymentGroupsList } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.property.policyIds">policyIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.property.versionConfig">versionConfig</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList">DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResult">DataCloudflareZeroTrustDeviceDeploymentGroupsListResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `policyIds`<sup>Required</sup> <a name="policyIds" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.property.policyIds"></a>

```typescript
public readonly policyIds: string[];
```

- *Type:* string[]

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `versionConfig`<sup>Required</sup> <a name="versionConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.property.versionConfig"></a>

```typescript
public readonly versionConfig: DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList">DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareZeroTrustDeviceDeploymentGroupsListResult;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResult">DataCloudflareZeroTrustDeviceDeploymentGroupsListResult</a>

---


### DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList <a name="DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDeviceDeploymentGroupsList } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList.get"></a>

```typescript
public get(index: number): DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference <a name="DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDeviceDeploymentGroupsList } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.property.targetEnvironment">targetEnvironment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfig">DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targetEnvironment`<sup>Required</sup> <a name="targetEnvironment" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.property.targetEnvironment"></a>

```typescript
public readonly targetEnvironment: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfig;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroupsList.DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfig">DataCloudflareZeroTrustDeviceDeploymentGroupsListResultVersionConfig</a>

---



