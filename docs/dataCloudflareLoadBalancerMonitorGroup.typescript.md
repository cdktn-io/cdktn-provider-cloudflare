# `dataCloudflareLoadBalancerMonitorGroup` Submodule <a name="`dataCloudflareLoadBalancerMonitorGroup` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareLoadBalancerMonitorGroup <a name="DataCloudflareLoadBalancerMonitorGroup" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/load_balancer_monitor_group cloudflare_load_balancer_monitor_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.Initializer"></a>

```typescript
import { dataCloudflareLoadBalancerMonitorGroup } from '@cdktn/provider-cloudflare'

new dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup(scope: Construct, id: string, config: DataCloudflareLoadBalancerMonitorGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupConfig">DataCloudflareLoadBalancerMonitorGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupConfig">DataCloudflareLoadBalancerMonitorGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareLoadBalancerMonitorGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.isConstruct"></a>

```typescript
import { dataCloudflareLoadBalancerMonitorGroup } from '@cdktn/provider-cloudflare'

dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.isTerraformElement"></a>

```typescript
import { dataCloudflareLoadBalancerMonitorGroup } from '@cdktn/provider-cloudflare'

dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.isTerraformDataSource"></a>

```typescript
import { dataCloudflareLoadBalancerMonitorGroup } from '@cdktn/provider-cloudflare'

dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.generateConfigForImport"></a>

```typescript
import { dataCloudflareLoadBalancerMonitorGroup } from '@cdktn/provider-cloudflare'

dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflareLoadBalancerMonitorGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareLoadBalancerMonitorGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareLoadBalancerMonitorGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/load_balancer_monitor_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareLoadBalancerMonitorGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.members">members</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersList">DataCloudflareLoadBalancerMonitorGroupMembersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.modifiedOn">modifiedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.monitorGroupIdInput">monitorGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.monitorGroupId">monitorGroupId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.members"></a>

```typescript
public readonly members: DataCloudflareLoadBalancerMonitorGroupMembersList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersList">DataCloudflareLoadBalancerMonitorGroupMembersList</a>

---

##### `modifiedOn`<sup>Required</sup> <a name="modifiedOn" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.modifiedOn"></a>

```typescript
public readonly modifiedOn: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `monitorGroupIdInput`<sup>Optional</sup> <a name="monitorGroupIdInput" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.monitorGroupIdInput"></a>

```typescript
public readonly monitorGroupIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `monitorGroupId`<sup>Required</sup> <a name="monitorGroupId" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.monitorGroupId"></a>

```typescript
public readonly monitorGroupId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareLoadBalancerMonitorGroupConfig <a name="DataCloudflareLoadBalancerMonitorGroupConfig" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupConfig.Initializer"></a>

```typescript
import { dataCloudflareLoadBalancerMonitorGroup } from '@cdktn/provider-cloudflare'

const dataCloudflareLoadBalancerMonitorGroupConfig: dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupConfig.property.accountId">accountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupConfig.property.monitorGroupId">monitorGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/load_balancer_monitor_group#monitor_group_id DataCloudflareLoadBalancerMonitorGroup#monitor_group_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/load_balancer_monitor_group#account_id DataCloudflareLoadBalancerMonitorGroup#account_id}

---

##### `monitorGroupId`<sup>Required</sup> <a name="monitorGroupId" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupConfig.property.monitorGroupId"></a>

```typescript
public readonly monitorGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/load_balancer_monitor_group#monitor_group_id DataCloudflareLoadBalancerMonitorGroup#monitor_group_id}.

---

### DataCloudflareLoadBalancerMonitorGroupMembers <a name="DataCloudflareLoadBalancerMonitorGroupMembers" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembers.Initializer"></a>

```typescript
import { dataCloudflareLoadBalancerMonitorGroup } from '@cdktn/provider-cloudflare'

const dataCloudflareLoadBalancerMonitorGroupMembers: dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembers = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareLoadBalancerMonitorGroupMembersList <a name="DataCloudflareLoadBalancerMonitorGroupMembersList" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersList.Initializer"></a>

```typescript
import { dataCloudflareLoadBalancerMonitorGroup } from '@cdktn/provider-cloudflare'

new dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersList.get"></a>

```typescript
public get(index: number): DataCloudflareLoadBalancerMonitorGroupMembersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareLoadBalancerMonitorGroupMembersOutputReference <a name="DataCloudflareLoadBalancerMonitorGroupMembersOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.Initializer"></a>

```typescript
import { dataCloudflareLoadBalancerMonitorGroup } from '@cdktn/provider-cloudflare'

new dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.property.monitorId">monitorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.property.monitoringOnly">monitoringOnly</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.property.mustBeHealthy">mustBeHealthy</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembers">DataCloudflareLoadBalancerMonitorGroupMembers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `monitorId`<sup>Required</sup> <a name="monitorId" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.property.monitorId"></a>

```typescript
public readonly monitorId: string;
```

- *Type:* string

---

##### `monitoringOnly`<sup>Required</sup> <a name="monitoringOnly" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.property.monitoringOnly"></a>

```typescript
public readonly monitoringOnly: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `mustBeHealthy`<sup>Required</sup> <a name="mustBeHealthy" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.property.mustBeHealthy"></a>

```typescript
public readonly mustBeHealthy: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareLoadBalancerMonitorGroupMembers;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembers">DataCloudflareLoadBalancerMonitorGroupMembers</a>

---



