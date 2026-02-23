# `dataCloudflareQueueConsumer` Submodule <a name="`dataCloudflareQueueConsumer` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareQueueConsumer <a name="DataCloudflareQueueConsumer" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/queue_consumer cloudflare_queue_consumer}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.Initializer"></a>

```typescript
import { dataCloudflareQueueConsumer } from '@cdktn/provider-cloudflare'

new dataCloudflareQueueConsumer.DataCloudflareQueueConsumer(scope: Construct, id: string, config: DataCloudflareQueueConsumerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerConfig">DataCloudflareQueueConsumerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerConfig">DataCloudflareQueueConsumerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareQueueConsumer resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.isConstruct"></a>

```typescript
import { dataCloudflareQueueConsumer } from '@cdktn/provider-cloudflare'

dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.isTerraformElement"></a>

```typescript
import { dataCloudflareQueueConsumer } from '@cdktn/provider-cloudflare'

dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.isTerraformDataSource"></a>

```typescript
import { dataCloudflareQueueConsumer } from '@cdktn/provider-cloudflare'

dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.generateConfigForImport"></a>

```typescript
import { dataCloudflareQueueConsumer } from '@cdktn/provider-cloudflare'

dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflareQueueConsumer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareQueueConsumer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareQueueConsumer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/queue_consumer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareQueueConsumer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.property.consumerId">consumerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.property.script">script</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.property.scriptName">scriptName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerSettingsOutputReference">DataCloudflareQueueConsumerSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.property.queueIdInput">queueIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.property.queueId">queueId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `consumerId`<sup>Required</sup> <a name="consumerId" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.property.consumerId"></a>

```typescript
public readonly consumerId: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `script`<sup>Required</sup> <a name="script" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.property.script"></a>

```typescript
public readonly script: string;
```

- *Type:* string

---

##### `scriptName`<sup>Required</sup> <a name="scriptName" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.property.scriptName"></a>

```typescript
public readonly scriptName: string;
```

- *Type:* string

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.property.settings"></a>

```typescript
public readonly settings: DataCloudflareQueueConsumerSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerSettingsOutputReference">DataCloudflareQueueConsumerSettingsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `queueIdInput`<sup>Optional</sup> <a name="queueIdInput" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.property.queueIdInput"></a>

```typescript
public readonly queueIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `queueId`<sup>Required</sup> <a name="queueId" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.property.queueId"></a>

```typescript
public readonly queueId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareQueueConsumerConfig <a name="DataCloudflareQueueConsumerConfig" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerConfig.Initializer"></a>

```typescript
import { dataCloudflareQueueConsumer } from '@cdktn/provider-cloudflare'

const dataCloudflareQueueConsumerConfig: dataCloudflareQueueConsumer.DataCloudflareQueueConsumerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerConfig.property.accountId">accountId</a></code> | <code>string</code> | A Resource identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerConfig.property.queueId">queueId</a></code> | <code>string</code> | A Resource identifier. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

A Resource identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/queue_consumer#account_id DataCloudflareQueueConsumer#account_id}

---

##### `queueId`<sup>Required</sup> <a name="queueId" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerConfig.property.queueId"></a>

```typescript
public readonly queueId: string;
```

- *Type:* string

A Resource identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/queue_consumer#queue_id DataCloudflareQueueConsumer#queue_id}

---

### DataCloudflareQueueConsumerSettings <a name="DataCloudflareQueueConsumerSettings" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerSettings.Initializer"></a>

```typescript
import { dataCloudflareQueueConsumer } from '@cdktn/provider-cloudflare'

const dataCloudflareQueueConsumerSettings: dataCloudflareQueueConsumer.DataCloudflareQueueConsumerSettings = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareQueueConsumerSettingsOutputReference <a name="DataCloudflareQueueConsumerSettingsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerSettingsOutputReference.Initializer"></a>

```typescript
import { dataCloudflareQueueConsumer } from '@cdktn/provider-cloudflare'

new dataCloudflareQueueConsumer.DataCloudflareQueueConsumerSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerSettingsOutputReference.property.batchSize">batchSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerSettingsOutputReference.property.maxConcurrency">maxConcurrency</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerSettingsOutputReference.property.maxRetries">maxRetries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerSettingsOutputReference.property.maxWaitTimeMs">maxWaitTimeMs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerSettingsOutputReference.property.retryDelay">retryDelay</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerSettingsOutputReference.property.visibilityTimeoutMs">visibilityTimeoutMs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerSettings">DataCloudflareQueueConsumerSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `batchSize`<sup>Required</sup> <a name="batchSize" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerSettingsOutputReference.property.batchSize"></a>

```typescript
public readonly batchSize: number;
```

- *Type:* number

---

##### `maxConcurrency`<sup>Required</sup> <a name="maxConcurrency" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerSettingsOutputReference.property.maxConcurrency"></a>

```typescript
public readonly maxConcurrency: number;
```

- *Type:* number

---

##### `maxRetries`<sup>Required</sup> <a name="maxRetries" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerSettingsOutputReference.property.maxRetries"></a>

```typescript
public readonly maxRetries: number;
```

- *Type:* number

---

##### `maxWaitTimeMs`<sup>Required</sup> <a name="maxWaitTimeMs" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerSettingsOutputReference.property.maxWaitTimeMs"></a>

```typescript
public readonly maxWaitTimeMs: number;
```

- *Type:* number

---

##### `retryDelay`<sup>Required</sup> <a name="retryDelay" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerSettingsOutputReference.property.retryDelay"></a>

```typescript
public readonly retryDelay: number;
```

- *Type:* number

---

##### `visibilityTimeoutMs`<sup>Required</sup> <a name="visibilityTimeoutMs" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerSettingsOutputReference.property.visibilityTimeoutMs"></a>

```typescript
public readonly visibilityTimeoutMs: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareQueueConsumerSettings;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareQueueConsumer.DataCloudflareQueueConsumerSettings">DataCloudflareQueueConsumerSettings</a>

---



