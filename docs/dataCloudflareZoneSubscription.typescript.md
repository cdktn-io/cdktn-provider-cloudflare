# `dataCloudflareZoneSubscription` Submodule <a name="`dataCloudflareZoneSubscription` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZoneSubscription <a name="DataCloudflareZoneSubscription" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/zone_subscription cloudflare_zone_subscription}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.Initializer"></a>

```typescript
import { dataCloudflareZoneSubscription } from '@cdktn/provider-cloudflare'

new dataCloudflareZoneSubscription.DataCloudflareZoneSubscription(scope: Construct, id: string, config: DataCloudflareZoneSubscriptionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionConfig">DataCloudflareZoneSubscriptionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionConfig">DataCloudflareZoneSubscriptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareZoneSubscription resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.isConstruct"></a>

```typescript
import { dataCloudflareZoneSubscription } from '@cdktn/provider-cloudflare'

dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.isTerraformElement"></a>

```typescript
import { dataCloudflareZoneSubscription } from '@cdktn/provider-cloudflare'

dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.isTerraformDataSource"></a>

```typescript
import { dataCloudflareZoneSubscription } from '@cdktn/provider-cloudflare'

dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.generateConfigForImport"></a>

```typescript
import { dataCloudflareZoneSubscription } from '@cdktn/provider-cloudflare'

dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflareZoneSubscription resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareZoneSubscription to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareZoneSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/zone_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZoneSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.property.currency">currency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.property.currentPeriodEnd">currentPeriodEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.property.currentPeriodStart">currentPeriodStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.property.frequency">frequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.property.price">price</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.property.ratePlan">ratePlan</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionRatePlanOutputReference">DataCloudflareZoneSubscriptionRatePlanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `currency`<sup>Required</sup> <a name="currency" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.property.currency"></a>

```typescript
public readonly currency: string;
```

- *Type:* string

---

##### `currentPeriodEnd`<sup>Required</sup> <a name="currentPeriodEnd" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.property.currentPeriodEnd"></a>

```typescript
public readonly currentPeriodEnd: string;
```

- *Type:* string

---

##### `currentPeriodStart`<sup>Required</sup> <a name="currentPeriodStart" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.property.currentPeriodStart"></a>

```typescript
public readonly currentPeriodStart: string;
```

- *Type:* string

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.property.frequency"></a>

```typescript
public readonly frequency: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `price`<sup>Required</sup> <a name="price" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.property.price"></a>

```typescript
public readonly price: number;
```

- *Type:* number

---

##### `ratePlan`<sup>Required</sup> <a name="ratePlan" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.property.ratePlan"></a>

```typescript
public readonly ratePlan: DataCloudflareZoneSubscriptionRatePlanOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionRatePlanOutputReference">DataCloudflareZoneSubscriptionRatePlanOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscription.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZoneSubscriptionConfig <a name="DataCloudflareZoneSubscriptionConfig" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionConfig.Initializer"></a>

```typescript
import { dataCloudflareZoneSubscription } from '@cdktn/provider-cloudflare'

const dataCloudflareZoneSubscriptionConfig: dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionConfig.property.zoneId">zoneId</a></code> | <code>string</code> | Identifier. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/zone_subscription#zone_id DataCloudflareZoneSubscription#zone_id}

---

### DataCloudflareZoneSubscriptionRatePlan <a name="DataCloudflareZoneSubscriptionRatePlan" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionRatePlan"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionRatePlan.Initializer"></a>

```typescript
import { dataCloudflareZoneSubscription } from '@cdktn/provider-cloudflare'

const dataCloudflareZoneSubscriptionRatePlan: dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionRatePlan = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZoneSubscriptionRatePlanOutputReference <a name="DataCloudflareZoneSubscriptionRatePlanOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionRatePlanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionRatePlanOutputReference.Initializer"></a>

```typescript
import { dataCloudflareZoneSubscription } from '@cdktn/provider-cloudflare'

new dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionRatePlanOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionRatePlanOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionRatePlanOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionRatePlanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionRatePlanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionRatePlanOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionRatePlanOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionRatePlanOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionRatePlanOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionRatePlanOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionRatePlanOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionRatePlanOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionRatePlanOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionRatePlanOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionRatePlanOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionRatePlanOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionRatePlanOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionRatePlanOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionRatePlanOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionRatePlanOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionRatePlanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionRatePlanOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionRatePlanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionRatePlanOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionRatePlanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionRatePlanOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionRatePlanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionRatePlanOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionRatePlanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionRatePlanOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionRatePlanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionRatePlanOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionRatePlanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionRatePlanOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionRatePlanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionRatePlanOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionRatePlanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionRatePlanOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionRatePlanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionRatePlanOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionRatePlanOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionRatePlanOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionRatePlanOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionRatePlanOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionRatePlanOutputReference.property.currency">currency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionRatePlanOutputReference.property.externallyManaged">externallyManaged</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionRatePlanOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionRatePlanOutputReference.property.isContract">isContract</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionRatePlanOutputReference.property.publicName">publicName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionRatePlanOutputReference.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionRatePlanOutputReference.property.sets">sets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionRatePlanOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionRatePlan">DataCloudflareZoneSubscriptionRatePlan</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionRatePlanOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionRatePlanOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `currency`<sup>Required</sup> <a name="currency" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionRatePlanOutputReference.property.currency"></a>

```typescript
public readonly currency: string;
```

- *Type:* string

---

##### `externallyManaged`<sup>Required</sup> <a name="externallyManaged" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionRatePlanOutputReference.property.externallyManaged"></a>

```typescript
public readonly externallyManaged: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionRatePlanOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isContract`<sup>Required</sup> <a name="isContract" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionRatePlanOutputReference.property.isContract"></a>

```typescript
public readonly isContract: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `publicName`<sup>Required</sup> <a name="publicName" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionRatePlanOutputReference.property.publicName"></a>

```typescript
public readonly publicName: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionRatePlanOutputReference.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `sets`<sup>Required</sup> <a name="sets" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionRatePlanOutputReference.property.sets"></a>

```typescript
public readonly sets: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionRatePlanOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareZoneSubscriptionRatePlan;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZoneSubscription.DataCloudflareZoneSubscriptionRatePlan">DataCloudflareZoneSubscriptionRatePlan</a>

---



