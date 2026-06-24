# `dataCloudflareZeroTrustDeviceDeploymentGroups` Submodule <a name="`dataCloudflareZeroTrustDeviceDeploymentGroups` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustDeviceDeploymentGroups <a name="DataCloudflareZeroTrustDeviceDeploymentGroups" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/zero_trust_device_deployment_groups cloudflare_zero_trust_device_deployment_groups}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDeviceDeploymentGroups } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups(scope: Construct, id: string, config: DataCloudflareZeroTrustDeviceDeploymentGroupsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsConfig">DataCloudflareZeroTrustDeviceDeploymentGroupsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsConfig">DataCloudflareZeroTrustDeviceDeploymentGroupsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustDeviceDeploymentGroups resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.isConstruct"></a>

```typescript
import { dataCloudflareZeroTrustDeviceDeploymentGroups } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.isTerraformElement"></a>

```typescript
import { dataCloudflareZeroTrustDeviceDeploymentGroups } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.isTerraformDataSource"></a>

```typescript
import { dataCloudflareZeroTrustDeviceDeploymentGroups } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.generateConfigForImport"></a>

```typescript
import { dataCloudflareZeroTrustDeviceDeploymentGroups } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflareZeroTrustDeviceDeploymentGroups resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareZeroTrustDeviceDeploymentGroups to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareZeroTrustDeviceDeploymentGroups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/zero_trust_device_deployment_groups#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustDeviceDeploymentGroups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.policyIds">policyIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.versionConfig">versionConfig</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigList">DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.groupIdInput">groupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.groupId">groupId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `policyIds`<sup>Required</sup> <a name="policyIds" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.policyIds"></a>

```typescript
public readonly policyIds: string[];
```

- *Type:* string[]

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `versionConfig`<sup>Required</sup> <a name="versionConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.versionConfig"></a>

```typescript
public readonly versionConfig: DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigList">DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.groupIdInput"></a>

```typescript
public readonly groupIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustDeviceDeploymentGroupsConfig <a name="DataCloudflareZeroTrustDeviceDeploymentGroupsConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsConfig.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDeviceDeploymentGroups } from '@cdktn/provider-cloudflare'

const dataCloudflareZeroTrustDeviceDeploymentGroupsConfig: dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/zero_trust_device_deployment_groups#account_id DataCloudflareZeroTrustDeviceDeploymentGroups#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsConfig.property.groupId">groupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/zero_trust_device_deployment_groups#group_id DataCloudflareZeroTrustDeviceDeploymentGroups#group_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/zero_trust_device_deployment_groups#account_id DataCloudflareZeroTrustDeviceDeploymentGroups#account_id}.

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsConfig.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/zero_trust_device_deployment_groups#group_id DataCloudflareZeroTrustDeviceDeploymentGroups#group_id}.

---

### DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfig <a name="DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfig.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDeviceDeploymentGroups } from '@cdktn/provider-cloudflare'

const dataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfig: dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfig = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigList <a name="DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigList.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDeviceDeploymentGroups } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigList.get"></a>

```typescript
public get(index: number): DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference <a name="DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDeviceDeploymentGroups } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.property.targetEnvironment">targetEnvironment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfig">DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targetEnvironment`<sup>Required</sup> <a name="targetEnvironment" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.property.targetEnvironment"></a>

```typescript
public readonly targetEnvironment: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfig;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfig">DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfig</a>

---



