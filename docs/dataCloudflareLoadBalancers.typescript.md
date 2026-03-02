# `dataCloudflareLoadBalancers` Submodule <a name="`dataCloudflareLoadBalancers` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareLoadBalancers <a name="DataCloudflareLoadBalancers" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/load_balancers cloudflare_load_balancers}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.Initializer"></a>

```typescript
import { dataCloudflareLoadBalancers } from '@cdktn/provider-cloudflare'

new dataCloudflareLoadBalancers.DataCloudflareLoadBalancers(scope: Construct, id: string, config: DataCloudflareLoadBalancersConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersConfig">DataCloudflareLoadBalancersConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersConfig">DataCloudflareLoadBalancersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.resetMaxItems">resetMaxItems</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.resetMaxItems"></a>

```typescript
public resetMaxItems(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareLoadBalancers resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.isConstruct"></a>

```typescript
import { dataCloudflareLoadBalancers } from '@cdktn/provider-cloudflare'

dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.isTerraformElement"></a>

```typescript
import { dataCloudflareLoadBalancers } from '@cdktn/provider-cloudflare'

dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.isTerraformDataSource"></a>

```typescript
import { dataCloudflareLoadBalancers } from '@cdktn/provider-cloudflare'

dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.generateConfigForImport"></a>

```typescript
import { dataCloudflareLoadBalancers } from '@cdktn/provider-cloudflare'

dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflareLoadBalancers resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareLoadBalancers to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareLoadBalancers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/load_balancers#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareLoadBalancers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.result">result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList">DataCloudflareLoadBalancersResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.maxItemsInput">maxItemsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.maxItems">maxItems</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.result"></a>

```typescript
public readonly result: DataCloudflareLoadBalancersResultList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList">DataCloudflareLoadBalancersResultList</a>

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.maxItemsInput"></a>

```typescript
public readonly maxItemsInput: number;
```

- *Type:* number

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareLoadBalancersConfig <a name="DataCloudflareLoadBalancersConfig" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersConfig.Initializer"></a>

```typescript
import { dataCloudflareLoadBalancers } from '@cdktn/provider-cloudflare'

const dataCloudflareLoadBalancersConfig: dataCloudflareLoadBalancers.DataCloudflareLoadBalancersConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersConfig.property.zoneId">zoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/load_balancers#zone_id DataCloudflareLoadBalancers#zone_id}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersConfig.property.maxItems">maxItems</a></code> | <code>number</code> | Max items to fetch, default: 1000. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/load_balancers#zone_id DataCloudflareLoadBalancers#zone_id}.

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersConfig.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/load_balancers#max_items DataCloudflareLoadBalancers#max_items}

---

### DataCloudflareLoadBalancersResult <a name="DataCloudflareLoadBalancersResult" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResult.Initializer"></a>

```typescript
import { dataCloudflareLoadBalancers } from '@cdktn/provider-cloudflare'

const dataCloudflareLoadBalancersResult: dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResult = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResult.property.countryPools">countryPools</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string[]}</code> | A mapping of country codes to a list of pool IDs (ordered by their failover priority) for the given country. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResult.property.popPools">popPools</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string[]}</code> | Enterprise only: A mapping of Cloudflare PoP identifiers to a list of pool IDs (ordered by their failover priority) for the PoP (datacenter). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResult.property.regionPools">regionPools</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string[]}</code> | A mapping of region codes to a list of pool IDs (ordered by their failover priority) for the given region. |

---

##### `countryPools`<sup>Optional</sup> <a name="countryPools" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResult.property.countryPools"></a>

```typescript
public readonly countryPools: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string[]}

A mapping of country codes to a list of pool IDs (ordered by their failover priority) for the given country.

Any country not explicitly defined will fall back to using the corresponding region_pool mapping if it exists else to default_pools.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/load_balancers#country_pools DataCloudflareLoadBalancers#country_pools}

---

##### `popPools`<sup>Optional</sup> <a name="popPools" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResult.property.popPools"></a>

```typescript
public readonly popPools: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string[]}

Enterprise only: A mapping of Cloudflare PoP identifiers to a list of pool IDs (ordered by their failover priority) for the PoP (datacenter).

Any PoPs not explicitly defined will fall back to using the corresponding country_pool, then region_pool mapping if it exists else to default_pools.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/load_balancers#pop_pools DataCloudflareLoadBalancers#pop_pools}

---

##### `regionPools`<sup>Optional</sup> <a name="regionPools" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResult.property.regionPools"></a>

```typescript
public readonly regionPools: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string[]}

A mapping of region codes to a list of pool IDs (ordered by their failover priority) for the given region.

Any regions not explicitly defined will fall back to using default_pools.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/load_balancers#region_pools DataCloudflareLoadBalancers#region_pools}

---

### DataCloudflareLoadBalancersResultAdaptiveRouting <a name="DataCloudflareLoadBalancersResultAdaptiveRouting" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRouting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRouting.Initializer"></a>

```typescript
import { dataCloudflareLoadBalancers } from '@cdktn/provider-cloudflare'

const dataCloudflareLoadBalancersResultAdaptiveRouting: dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRouting = { ... }
```


### DataCloudflareLoadBalancersResultLocationStrategy <a name="DataCloudflareLoadBalancersResultLocationStrategy" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategy.Initializer"></a>

```typescript
import { dataCloudflareLoadBalancers } from '@cdktn/provider-cloudflare'

const dataCloudflareLoadBalancersResultLocationStrategy: dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategy = { ... }
```


### DataCloudflareLoadBalancersResultRandomSteering <a name="DataCloudflareLoadBalancersResultRandomSteering" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteering"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteering.Initializer"></a>

```typescript
import { dataCloudflareLoadBalancers } from '@cdktn/provider-cloudflare'

const dataCloudflareLoadBalancersResultRandomSteering: dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteering = { ... }
```


### DataCloudflareLoadBalancersResultRules <a name="DataCloudflareLoadBalancersResultRules" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRules.Initializer"></a>

```typescript
import { dataCloudflareLoadBalancers } from '@cdktn/provider-cloudflare'

const dataCloudflareLoadBalancersResultRules: dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRules = { ... }
```


### DataCloudflareLoadBalancersResultRulesFixedResponse <a name="DataCloudflareLoadBalancersResultRulesFixedResponse" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponse.Initializer"></a>

```typescript
import { dataCloudflareLoadBalancers } from '@cdktn/provider-cloudflare'

const dataCloudflareLoadBalancersResultRulesFixedResponse: dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponse = { ... }
```


### DataCloudflareLoadBalancersResultRulesOverrides <a name="DataCloudflareLoadBalancersResultRulesOverrides" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverrides.Initializer"></a>

```typescript
import { dataCloudflareLoadBalancers } from '@cdktn/provider-cloudflare'

const dataCloudflareLoadBalancersResultRulesOverrides: dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverrides = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverrides.property.countryPools">countryPools</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string[]}</code> | A mapping of country codes to a list of pool IDs (ordered by their failover priority) for the given country. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverrides.property.popPools">popPools</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string[]}</code> | Enterprise only: A mapping of Cloudflare PoP identifiers to a list of pool IDs (ordered by their failover priority) for the PoP (datacenter). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverrides.property.regionPools">regionPools</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string[]}</code> | A mapping of region codes to a list of pool IDs (ordered by their failover priority) for the given region. |

---

##### `countryPools`<sup>Optional</sup> <a name="countryPools" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverrides.property.countryPools"></a>

```typescript
public readonly countryPools: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string[]}

A mapping of country codes to a list of pool IDs (ordered by their failover priority) for the given country.

Any country not explicitly defined will fall back to using the corresponding region_pool mapping if it exists else to default_pools.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/load_balancers#country_pools DataCloudflareLoadBalancers#country_pools}

---

##### `popPools`<sup>Optional</sup> <a name="popPools" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverrides.property.popPools"></a>

```typescript
public readonly popPools: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string[]}

Enterprise only: A mapping of Cloudflare PoP identifiers to a list of pool IDs (ordered by their failover priority) for the PoP (datacenter).

Any PoPs not explicitly defined will fall back to using the corresponding country_pool, then region_pool mapping if it exists else to default_pools.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/load_balancers#pop_pools DataCloudflareLoadBalancers#pop_pools}

---

##### `regionPools`<sup>Optional</sup> <a name="regionPools" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverrides.property.regionPools"></a>

```typescript
public readonly regionPools: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string[]}

A mapping of region codes to a list of pool IDs (ordered by their failover priority) for the given region.

Any regions not explicitly defined will fall back to using default_pools.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/load_balancers#region_pools DataCloudflareLoadBalancers#region_pools}

---

### DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRouting <a name="DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRouting" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRouting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRouting.Initializer"></a>

```typescript
import { dataCloudflareLoadBalancers } from '@cdktn/provider-cloudflare'

const dataCloudflareLoadBalancersResultRulesOverridesAdaptiveRouting: dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRouting = { ... }
```


### DataCloudflareLoadBalancersResultRulesOverridesLocationStrategy <a name="DataCloudflareLoadBalancersResultRulesOverridesLocationStrategy" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategy.Initializer"></a>

```typescript
import { dataCloudflareLoadBalancers } from '@cdktn/provider-cloudflare'

const dataCloudflareLoadBalancersResultRulesOverridesLocationStrategy: dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategy = { ... }
```


### DataCloudflareLoadBalancersResultRulesOverridesRandomSteering <a name="DataCloudflareLoadBalancersResultRulesOverridesRandomSteering" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteering"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteering.Initializer"></a>

```typescript
import { dataCloudflareLoadBalancers } from '@cdktn/provider-cloudflare'

const dataCloudflareLoadBalancersResultRulesOverridesRandomSteering: dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteering = { ... }
```


### DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributes <a name="DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributes" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributes.Initializer"></a>

```typescript
import { dataCloudflareLoadBalancers } from '@cdktn/provider-cloudflare'

const dataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributes: dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributes.property.drainDuration">drainDuration</a></code> | <code>number</code> | Configures the drain duration in seconds. |

---

##### `drainDuration`<sup>Optional</sup> <a name="drainDuration" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributes.property.drainDuration"></a>

```typescript
public readonly drainDuration: number;
```

- *Type:* number

Configures the drain duration in seconds.

This field is only used when session affinity is enabled on the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/load_balancers#drain_duration DataCloudflareLoadBalancers#drain_duration}

---

### DataCloudflareLoadBalancersResultSessionAffinityAttributes <a name="DataCloudflareLoadBalancersResultSessionAffinityAttributes" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributes.Initializer"></a>

```typescript
import { dataCloudflareLoadBalancers } from '@cdktn/provider-cloudflare'

const dataCloudflareLoadBalancersResultSessionAffinityAttributes: dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributes.property.drainDuration">drainDuration</a></code> | <code>number</code> | Configures the drain duration in seconds. |

---

##### `drainDuration`<sup>Optional</sup> <a name="drainDuration" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributes.property.drainDuration"></a>

```typescript
public readonly drainDuration: number;
```

- *Type:* number

Configures the drain duration in seconds.

This field is only used when session affinity is enabled on the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/load_balancers#drain_duration DataCloudflareLoadBalancers#drain_duration}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference <a name="DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.Initializer"></a>

```typescript
import { dataCloudflareLoadBalancers } from '@cdktn/provider-cloudflare'

new dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.property.failoverAcrossPools">failoverAcrossPools</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRouting">DataCloudflareLoadBalancersResultAdaptiveRouting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `failoverAcrossPools`<sup>Required</sup> <a name="failoverAcrossPools" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.property.failoverAcrossPools"></a>

```typescript
public readonly failoverAcrossPools: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareLoadBalancersResultAdaptiveRouting;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRouting">DataCloudflareLoadBalancersResultAdaptiveRouting</a>

---


### DataCloudflareLoadBalancersResultList <a name="DataCloudflareLoadBalancersResultList" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList.Initializer"></a>

```typescript
import { dataCloudflareLoadBalancers } from '@cdktn/provider-cloudflare'

new dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList.get"></a>

```typescript
public get(index: number): DataCloudflareLoadBalancersResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResult">DataCloudflareLoadBalancersResult</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataCloudflareLoadBalancersResult[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResult">DataCloudflareLoadBalancersResult</a>[]

---


### DataCloudflareLoadBalancersResultLocationStrategyOutputReference <a name="DataCloudflareLoadBalancersResultLocationStrategyOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.Initializer"></a>

```typescript
import { dataCloudflareLoadBalancers } from '@cdktn/provider-cloudflare'

new dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.property.preferEcs">preferEcs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategy">DataCloudflareLoadBalancersResultLocationStrategy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `preferEcs`<sup>Required</sup> <a name="preferEcs" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.property.preferEcs"></a>

```typescript
public readonly preferEcs: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareLoadBalancersResultLocationStrategy;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategy">DataCloudflareLoadBalancersResultLocationStrategy</a>

---


### DataCloudflareLoadBalancersResultOutputReference <a name="DataCloudflareLoadBalancersResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.Initializer"></a>

```typescript
import { dataCloudflareLoadBalancers } from '@cdktn/provider-cloudflare'

new dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.resetCountryPools">resetCountryPools</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.resetPopPools">resetPopPools</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.resetRegionPools">resetRegionPools</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCountryPools` <a name="resetCountryPools" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.resetCountryPools"></a>

```typescript
public resetCountryPools(): void
```

##### `resetPopPools` <a name="resetPopPools" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.resetPopPools"></a>

```typescript
public resetPopPools(): void
```

##### `resetRegionPools` <a name="resetRegionPools" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.resetRegionPools"></a>

```typescript
public resetRegionPools(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.adaptiveRouting">adaptiveRouting</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference">DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.defaultPools">defaultPools</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.fallbackPool">fallbackPool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.locationStrategy">locationStrategy</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference">DataCloudflareLoadBalancersResultLocationStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.modifiedOn">modifiedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.networks">networks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.proxied">proxied</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.randomSteering">randomSteering</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference">DataCloudflareLoadBalancersResultRandomSteeringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList">DataCloudflareLoadBalancersResultRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.sessionAffinity">sessionAffinity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.sessionAffinityAttributes">sessionAffinityAttributes</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference">DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.sessionAffinityTtl">sessionAffinityTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.steeringPolicy">steeringPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.ttl">ttl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.zoneName">zoneName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.countryPoolsInput">countryPoolsInput</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string[]}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.popPoolsInput">popPoolsInput</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string[]}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.regionPoolsInput">regionPoolsInput</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string[]}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.countryPools">countryPools</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string[]}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.popPools">popPools</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string[]}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.regionPools">regionPools</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string[]}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResult">DataCloudflareLoadBalancersResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `adaptiveRouting`<sup>Required</sup> <a name="adaptiveRouting" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.adaptiveRouting"></a>

```typescript
public readonly adaptiveRouting: DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference">DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference</a>

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `defaultPools`<sup>Required</sup> <a name="defaultPools" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.defaultPools"></a>

```typescript
public readonly defaultPools: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `fallbackPool`<sup>Required</sup> <a name="fallbackPool" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.fallbackPool"></a>

```typescript
public readonly fallbackPool: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `locationStrategy`<sup>Required</sup> <a name="locationStrategy" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.locationStrategy"></a>

```typescript
public readonly locationStrategy: DataCloudflareLoadBalancersResultLocationStrategyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference">DataCloudflareLoadBalancersResultLocationStrategyOutputReference</a>

---

##### `modifiedOn`<sup>Required</sup> <a name="modifiedOn" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.modifiedOn"></a>

```typescript
public readonly modifiedOn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networks`<sup>Required</sup> <a name="networks" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.networks"></a>

```typescript
public readonly networks: string[];
```

- *Type:* string[]

---

##### `proxied`<sup>Required</sup> <a name="proxied" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.proxied"></a>

```typescript
public readonly proxied: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `randomSteering`<sup>Required</sup> <a name="randomSteering" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.randomSteering"></a>

```typescript
public readonly randomSteering: DataCloudflareLoadBalancersResultRandomSteeringOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference">DataCloudflareLoadBalancersResultRandomSteeringOutputReference</a>

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.rules"></a>

```typescript
public readonly rules: DataCloudflareLoadBalancersResultRulesList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList">DataCloudflareLoadBalancersResultRulesList</a>

---

##### `sessionAffinity`<sup>Required</sup> <a name="sessionAffinity" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.sessionAffinity"></a>

```typescript
public readonly sessionAffinity: string;
```

- *Type:* string

---

##### `sessionAffinityAttributes`<sup>Required</sup> <a name="sessionAffinityAttributes" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.sessionAffinityAttributes"></a>

```typescript
public readonly sessionAffinityAttributes: DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference">DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference</a>

---

##### `sessionAffinityTtl`<sup>Required</sup> <a name="sessionAffinityTtl" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.sessionAffinityTtl"></a>

```typescript
public readonly sessionAffinityTtl: number;
```

- *Type:* number

---

##### `steeringPolicy`<sup>Required</sup> <a name="steeringPolicy" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.steeringPolicy"></a>

```typescript
public readonly steeringPolicy: string;
```

- *Type:* string

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

---

##### `zoneName`<sup>Required</sup> <a name="zoneName" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.zoneName"></a>

```typescript
public readonly zoneName: string;
```

- *Type:* string

---

##### `countryPoolsInput`<sup>Optional</sup> <a name="countryPoolsInput" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.countryPoolsInput"></a>

```typescript
public readonly countryPoolsInput: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string[]}

---

##### `popPoolsInput`<sup>Optional</sup> <a name="popPoolsInput" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.popPoolsInput"></a>

```typescript
public readonly popPoolsInput: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string[]}

---

##### `regionPoolsInput`<sup>Optional</sup> <a name="regionPoolsInput" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.regionPoolsInput"></a>

```typescript
public readonly regionPoolsInput: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string[]}

---

##### `countryPools`<sup>Required</sup> <a name="countryPools" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.countryPools"></a>

```typescript
public readonly countryPools: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string[]}

---

##### `popPools`<sup>Required</sup> <a name="popPools" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.popPools"></a>

```typescript
public readonly popPools: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string[]}

---

##### `regionPools`<sup>Required</sup> <a name="regionPools" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.regionPools"></a>

```typescript
public readonly regionPools: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string[]}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareLoadBalancersResult;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResult">DataCloudflareLoadBalancersResult</a>

---


### DataCloudflareLoadBalancersResultRandomSteeringOutputReference <a name="DataCloudflareLoadBalancersResultRandomSteeringOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.Initializer"></a>

```typescript
import { dataCloudflareLoadBalancers } from '@cdktn/provider-cloudflare'

new dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.property.defaultWeight">defaultWeight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.property.poolWeights">poolWeights</a></code> | <code>cdktn.NumberMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteering">DataCloudflareLoadBalancersResultRandomSteering</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultWeight`<sup>Required</sup> <a name="defaultWeight" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.property.defaultWeight"></a>

```typescript
public readonly defaultWeight: number;
```

- *Type:* number

---

##### `poolWeights`<sup>Required</sup> <a name="poolWeights" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.property.poolWeights"></a>

```typescript
public readonly poolWeights: NumberMap;
```

- *Type:* cdktn.NumberMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareLoadBalancersResultRandomSteering;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteering">DataCloudflareLoadBalancersResultRandomSteering</a>

---


### DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference <a name="DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.Initializer"></a>

```typescript
import { dataCloudflareLoadBalancers } from '@cdktn/provider-cloudflare'

new dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.property.messageBody">messageBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.property.statusCode">statusCode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponse">DataCloudflareLoadBalancersResultRulesFixedResponse</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `messageBody`<sup>Required</sup> <a name="messageBody" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.property.messageBody"></a>

```typescript
public readonly messageBody: string;
```

- *Type:* string

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.property.statusCode"></a>

```typescript
public readonly statusCode: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareLoadBalancersResultRulesFixedResponse;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponse">DataCloudflareLoadBalancersResultRulesFixedResponse</a>

---


### DataCloudflareLoadBalancersResultRulesList <a name="DataCloudflareLoadBalancersResultRulesList" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList.Initializer"></a>

```typescript
import { dataCloudflareLoadBalancers } from '@cdktn/provider-cloudflare'

new dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList.get"></a>

```typescript
public get(index: number): DataCloudflareLoadBalancersResultRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareLoadBalancersResultRulesOutputReference <a name="DataCloudflareLoadBalancersResultRulesOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.Initializer"></a>

```typescript
import { dataCloudflareLoadBalancers } from '@cdktn/provider-cloudflare'

new dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.property.condition">condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.property.disabled">disabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.property.fixedResponse">fixedResponse</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference">DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.property.overrides">overrides</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference">DataCloudflareLoadBalancersResultRulesOverridesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.property.terminates">terminates</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRules">DataCloudflareLoadBalancersResultRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.property.disabled"></a>

```typescript
public readonly disabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `fixedResponse`<sup>Required</sup> <a name="fixedResponse" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.property.fixedResponse"></a>

```typescript
public readonly fixedResponse: DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference">DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `overrides`<sup>Required</sup> <a name="overrides" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.property.overrides"></a>

```typescript
public readonly overrides: DataCloudflareLoadBalancersResultRulesOverridesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference">DataCloudflareLoadBalancersResultRulesOverridesOutputReference</a>

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `terminates`<sup>Required</sup> <a name="terminates" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.property.terminates"></a>

```typescript
public readonly terminates: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareLoadBalancersResultRules;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRules">DataCloudflareLoadBalancersResultRules</a>

---


### DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference <a name="DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.Initializer"></a>

```typescript
import { dataCloudflareLoadBalancers } from '@cdktn/provider-cloudflare'

new dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.property.failoverAcrossPools">failoverAcrossPools</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRouting">DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRouting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `failoverAcrossPools`<sup>Required</sup> <a name="failoverAcrossPools" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.property.failoverAcrossPools"></a>

```typescript
public readonly failoverAcrossPools: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRouting;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRouting">DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRouting</a>

---


### DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference <a name="DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.Initializer"></a>

```typescript
import { dataCloudflareLoadBalancers } from '@cdktn/provider-cloudflare'

new dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.property.preferEcs">preferEcs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategy">DataCloudflareLoadBalancersResultRulesOverridesLocationStrategy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `preferEcs`<sup>Required</sup> <a name="preferEcs" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.property.preferEcs"></a>

```typescript
public readonly preferEcs: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareLoadBalancersResultRulesOverridesLocationStrategy;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategy">DataCloudflareLoadBalancersResultRulesOverridesLocationStrategy</a>

---


### DataCloudflareLoadBalancersResultRulesOverridesOutputReference <a name="DataCloudflareLoadBalancersResultRulesOverridesOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.Initializer"></a>

```typescript
import { dataCloudflareLoadBalancers } from '@cdktn/provider-cloudflare'

new dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.resetCountryPools">resetCountryPools</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.resetPopPools">resetPopPools</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.resetRegionPools">resetRegionPools</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCountryPools` <a name="resetCountryPools" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.resetCountryPools"></a>

```typescript
public resetCountryPools(): void
```

##### `resetPopPools` <a name="resetPopPools" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.resetPopPools"></a>

```typescript
public resetPopPools(): void
```

##### `resetRegionPools` <a name="resetRegionPools" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.resetRegionPools"></a>

```typescript
public resetRegionPools(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.adaptiveRouting">adaptiveRouting</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference">DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.defaultPools">defaultPools</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.fallbackPool">fallbackPool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.locationStrategy">locationStrategy</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference">DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.randomSteering">randomSteering</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference">DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.sessionAffinity">sessionAffinity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.sessionAffinityAttributes">sessionAffinityAttributes</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference">DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.sessionAffinityTtl">sessionAffinityTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.steeringPolicy">steeringPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.ttl">ttl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.countryPoolsInput">countryPoolsInput</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string[]}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.popPoolsInput">popPoolsInput</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string[]}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.regionPoolsInput">regionPoolsInput</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string[]}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.countryPools">countryPools</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string[]}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.popPools">popPools</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string[]}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.regionPools">regionPools</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string[]}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverrides">DataCloudflareLoadBalancersResultRulesOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `adaptiveRouting`<sup>Required</sup> <a name="adaptiveRouting" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.adaptiveRouting"></a>

```typescript
public readonly adaptiveRouting: DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference">DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference</a>

---

##### `defaultPools`<sup>Required</sup> <a name="defaultPools" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.defaultPools"></a>

```typescript
public readonly defaultPools: string[];
```

- *Type:* string[]

---

##### `fallbackPool`<sup>Required</sup> <a name="fallbackPool" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.fallbackPool"></a>

```typescript
public readonly fallbackPool: string;
```

- *Type:* string

---

##### `locationStrategy`<sup>Required</sup> <a name="locationStrategy" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.locationStrategy"></a>

```typescript
public readonly locationStrategy: DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference">DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference</a>

---

##### `randomSteering`<sup>Required</sup> <a name="randomSteering" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.randomSteering"></a>

```typescript
public readonly randomSteering: DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference">DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference</a>

---

##### `sessionAffinity`<sup>Required</sup> <a name="sessionAffinity" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.sessionAffinity"></a>

```typescript
public readonly sessionAffinity: string;
```

- *Type:* string

---

##### `sessionAffinityAttributes`<sup>Required</sup> <a name="sessionAffinityAttributes" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.sessionAffinityAttributes"></a>

```typescript
public readonly sessionAffinityAttributes: DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference">DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference</a>

---

##### `sessionAffinityTtl`<sup>Required</sup> <a name="sessionAffinityTtl" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.sessionAffinityTtl"></a>

```typescript
public readonly sessionAffinityTtl: number;
```

- *Type:* number

---

##### `steeringPolicy`<sup>Required</sup> <a name="steeringPolicy" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.steeringPolicy"></a>

```typescript
public readonly steeringPolicy: string;
```

- *Type:* string

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

---

##### `countryPoolsInput`<sup>Optional</sup> <a name="countryPoolsInput" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.countryPoolsInput"></a>

```typescript
public readonly countryPoolsInput: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string[]}

---

##### `popPoolsInput`<sup>Optional</sup> <a name="popPoolsInput" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.popPoolsInput"></a>

```typescript
public readonly popPoolsInput: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string[]}

---

##### `regionPoolsInput`<sup>Optional</sup> <a name="regionPoolsInput" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.regionPoolsInput"></a>

```typescript
public readonly regionPoolsInput: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string[]}

---

##### `countryPools`<sup>Required</sup> <a name="countryPools" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.countryPools"></a>

```typescript
public readonly countryPools: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string[]}

---

##### `popPools`<sup>Required</sup> <a name="popPools" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.popPools"></a>

```typescript
public readonly popPools: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string[]}

---

##### `regionPools`<sup>Required</sup> <a name="regionPools" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.regionPools"></a>

```typescript
public readonly regionPools: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string[]}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareLoadBalancersResultRulesOverrides;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverrides">DataCloudflareLoadBalancersResultRulesOverrides</a>

---


### DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference <a name="DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.Initializer"></a>

```typescript
import { dataCloudflareLoadBalancers } from '@cdktn/provider-cloudflare'

new dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.property.defaultWeight">defaultWeight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.property.poolWeights">poolWeights</a></code> | <code>cdktn.NumberMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteering">DataCloudflareLoadBalancersResultRulesOverridesRandomSteering</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultWeight`<sup>Required</sup> <a name="defaultWeight" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.property.defaultWeight"></a>

```typescript
public readonly defaultWeight: number;
```

- *Type:* number

---

##### `poolWeights`<sup>Required</sup> <a name="poolWeights" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.property.poolWeights"></a>

```typescript
public readonly poolWeights: NumberMap;
```

- *Type:* cdktn.NumberMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareLoadBalancersResultRulesOverridesRandomSteering;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteering">DataCloudflareLoadBalancersResultRulesOverridesRandomSteering</a>

---


### DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference <a name="DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.Initializer"></a>

```typescript
import { dataCloudflareLoadBalancers } from '@cdktn/provider-cloudflare'

new dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.resetDrainDuration">resetDrainDuration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDrainDuration` <a name="resetDrainDuration" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.resetDrainDuration"></a>

```typescript
public resetDrainDuration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.property.headers">headers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.property.requireAllHeaders">requireAllHeaders</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.property.samesite">samesite</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.property.secure">secure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.property.zeroDowntimeFailover">zeroDowntimeFailover</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.property.drainDurationInput">drainDurationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.property.drainDuration">drainDuration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributes">DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.property.headers"></a>

```typescript
public readonly headers: string[];
```

- *Type:* string[]

---

##### `requireAllHeaders`<sup>Required</sup> <a name="requireAllHeaders" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.property.requireAllHeaders"></a>

```typescript
public readonly requireAllHeaders: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `samesite`<sup>Required</sup> <a name="samesite" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.property.samesite"></a>

```typescript
public readonly samesite: string;
```

- *Type:* string

---

##### `secure`<sup>Required</sup> <a name="secure" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.property.secure"></a>

```typescript
public readonly secure: string;
```

- *Type:* string

---

##### `zeroDowntimeFailover`<sup>Required</sup> <a name="zeroDowntimeFailover" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.property.zeroDowntimeFailover"></a>

```typescript
public readonly zeroDowntimeFailover: string;
```

- *Type:* string

---

##### `drainDurationInput`<sup>Optional</sup> <a name="drainDurationInput" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.property.drainDurationInput"></a>

```typescript
public readonly drainDurationInput: number;
```

- *Type:* number

---

##### `drainDuration`<sup>Required</sup> <a name="drainDuration" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.property.drainDuration"></a>

```typescript
public readonly drainDuration: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributes;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributes">DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributes</a>

---


### DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference <a name="DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.Initializer"></a>

```typescript
import { dataCloudflareLoadBalancers } from '@cdktn/provider-cloudflare'

new dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.resetDrainDuration">resetDrainDuration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDrainDuration` <a name="resetDrainDuration" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.resetDrainDuration"></a>

```typescript
public resetDrainDuration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.property.headers">headers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.property.requireAllHeaders">requireAllHeaders</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.property.samesite">samesite</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.property.secure">secure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.property.zeroDowntimeFailover">zeroDowntimeFailover</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.property.drainDurationInput">drainDurationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.property.drainDuration">drainDuration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributes">DataCloudflareLoadBalancersResultSessionAffinityAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.property.headers"></a>

```typescript
public readonly headers: string[];
```

- *Type:* string[]

---

##### `requireAllHeaders`<sup>Required</sup> <a name="requireAllHeaders" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.property.requireAllHeaders"></a>

```typescript
public readonly requireAllHeaders: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `samesite`<sup>Required</sup> <a name="samesite" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.property.samesite"></a>

```typescript
public readonly samesite: string;
```

- *Type:* string

---

##### `secure`<sup>Required</sup> <a name="secure" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.property.secure"></a>

```typescript
public readonly secure: string;
```

- *Type:* string

---

##### `zeroDowntimeFailover`<sup>Required</sup> <a name="zeroDowntimeFailover" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.property.zeroDowntimeFailover"></a>

```typescript
public readonly zeroDowntimeFailover: string;
```

- *Type:* string

---

##### `drainDurationInput`<sup>Optional</sup> <a name="drainDurationInput" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.property.drainDurationInput"></a>

```typescript
public readonly drainDurationInput: number;
```

- *Type:* number

---

##### `drainDuration`<sup>Required</sup> <a name="drainDuration" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.property.drainDuration"></a>

```typescript
public readonly drainDuration: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareLoadBalancersResultSessionAffinityAttributes;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributes">DataCloudflareLoadBalancersResultSessionAffinityAttributes</a>

---



