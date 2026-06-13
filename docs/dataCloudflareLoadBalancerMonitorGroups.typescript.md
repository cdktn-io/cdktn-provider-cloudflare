# `dataCloudflareLoadBalancerMonitorGroups` Submodule <a name="`dataCloudflareLoadBalancerMonitorGroups` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareLoadBalancerMonitorGroups <a name="DataCloudflareLoadBalancerMonitorGroups" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/load_balancer_monitor_groups cloudflare_load_balancer_monitor_groups}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.Initializer"></a>

```typescript
import { dataCloudflareLoadBalancerMonitorGroups } from '@cdktn/provider-cloudflare'

new dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups(scope: Construct, id: string, config: DataCloudflareLoadBalancerMonitorGroupsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsConfig">DataCloudflareLoadBalancerMonitorGroupsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsConfig">DataCloudflareLoadBalancerMonitorGroupsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.resetMaxItems">resetMaxItems</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.resetMaxItems"></a>

```typescript
public resetMaxItems(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareLoadBalancerMonitorGroups resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.isConstruct"></a>

```typescript
import { dataCloudflareLoadBalancerMonitorGroups } from '@cdktn/provider-cloudflare'

dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.isTerraformElement"></a>

```typescript
import { dataCloudflareLoadBalancerMonitorGroups } from '@cdktn/provider-cloudflare'

dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.isTerraformDataSource"></a>

```typescript
import { dataCloudflareLoadBalancerMonitorGroups } from '@cdktn/provider-cloudflare'

dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.generateConfigForImport"></a>

```typescript
import { dataCloudflareLoadBalancerMonitorGroups } from '@cdktn/provider-cloudflare'

dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflareLoadBalancerMonitorGroups resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareLoadBalancerMonitorGroups to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareLoadBalancerMonitorGroups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/load_balancer_monitor_groups#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareLoadBalancerMonitorGroups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.property.result">result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultList">DataCloudflareLoadBalancerMonitorGroupsResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.property.maxItemsInput">maxItemsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.property.maxItems">maxItems</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.property.result"></a>

```typescript
public readonly result: DataCloudflareLoadBalancerMonitorGroupsResultList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultList">DataCloudflareLoadBalancerMonitorGroupsResultList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.property.maxItemsInput"></a>

```typescript
public readonly maxItemsInput: number;
```

- *Type:* number

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareLoadBalancerMonitorGroupsConfig <a name="DataCloudflareLoadBalancerMonitorGroupsConfig" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsConfig.Initializer"></a>

```typescript
import { dataCloudflareLoadBalancerMonitorGroups } from '@cdktn/provider-cloudflare'

const dataCloudflareLoadBalancerMonitorGroupsConfig: dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsConfig.property.accountId">accountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsConfig.property.maxItems">maxItems</a></code> | <code>number</code> | Max items to fetch, default: 1000. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/load_balancer_monitor_groups#account_id DataCloudflareLoadBalancerMonitorGroups#account_id}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsConfig.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/load_balancer_monitor_groups#max_items DataCloudflareLoadBalancerMonitorGroups#max_items}

---

### DataCloudflareLoadBalancerMonitorGroupsResult <a name="DataCloudflareLoadBalancerMonitorGroupsResult" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResult.Initializer"></a>

```typescript
import { dataCloudflareLoadBalancerMonitorGroups } from '@cdktn/provider-cloudflare'

const dataCloudflareLoadBalancerMonitorGroupsResult: dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResult = { ... }
```


### DataCloudflareLoadBalancerMonitorGroupsResultMembers <a name="DataCloudflareLoadBalancerMonitorGroupsResultMembers" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembers.Initializer"></a>

```typescript
import { dataCloudflareLoadBalancerMonitorGroups } from '@cdktn/provider-cloudflare'

const dataCloudflareLoadBalancerMonitorGroupsResultMembers: dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembers = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareLoadBalancerMonitorGroupsResultList <a name="DataCloudflareLoadBalancerMonitorGroupsResultList" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultList.Initializer"></a>

```typescript
import { dataCloudflareLoadBalancerMonitorGroups } from '@cdktn/provider-cloudflare'

new dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultList.get"></a>

```typescript
public get(index: number): DataCloudflareLoadBalancerMonitorGroupsResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareLoadBalancerMonitorGroupsResultMembersList <a name="DataCloudflareLoadBalancerMonitorGroupsResultMembersList" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersList.Initializer"></a>

```typescript
import { dataCloudflareLoadBalancerMonitorGroups } from '@cdktn/provider-cloudflare'

new dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersList.get"></a>

```typescript
public get(index: number): DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference <a name="DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.Initializer"></a>

```typescript
import { dataCloudflareLoadBalancerMonitorGroups } from '@cdktn/provider-cloudflare'

new dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.property.monitorId">monitorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.property.monitoringOnly">monitoringOnly</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.property.mustBeHealthy">mustBeHealthy</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembers">DataCloudflareLoadBalancerMonitorGroupsResultMembers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `monitorId`<sup>Required</sup> <a name="monitorId" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.property.monitorId"></a>

```typescript
public readonly monitorId: string;
```

- *Type:* string

---

##### `monitoringOnly`<sup>Required</sup> <a name="monitoringOnly" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.property.monitoringOnly"></a>

```typescript
public readonly monitoringOnly: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `mustBeHealthy`<sup>Required</sup> <a name="mustBeHealthy" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.property.mustBeHealthy"></a>

```typescript
public readonly mustBeHealthy: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareLoadBalancerMonitorGroupsResultMembers;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembers">DataCloudflareLoadBalancerMonitorGroupsResultMembers</a>

---


### DataCloudflareLoadBalancerMonitorGroupsResultOutputReference <a name="DataCloudflareLoadBalancerMonitorGroupsResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.Initializer"></a>

```typescript
import { dataCloudflareLoadBalancerMonitorGroups } from '@cdktn/provider-cloudflare'

new dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.property.members">members</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersList">DataCloudflareLoadBalancerMonitorGroupsResultMembersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.property.modifiedOn">modifiedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResult">DataCloudflareLoadBalancerMonitorGroupsResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.property.members"></a>

```typescript
public readonly members: DataCloudflareLoadBalancerMonitorGroupsResultMembersList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersList">DataCloudflareLoadBalancerMonitorGroupsResultMembersList</a>

---

##### `modifiedOn`<sup>Required</sup> <a name="modifiedOn" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.property.modifiedOn"></a>

```typescript
public readonly modifiedOn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareLoadBalancerMonitorGroupsResult;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResult">DataCloudflareLoadBalancerMonitorGroupsResult</a>

---



