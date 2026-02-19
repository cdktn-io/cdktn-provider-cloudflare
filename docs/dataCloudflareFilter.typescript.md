# `dataCloudflareFilter` Submodule <a name="`dataCloudflareFilter` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareFilter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareFilter <a name="DataCloudflareFilter" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/filter cloudflare_filter}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.Initializer"></a>

```typescript
import { dataCloudflareFilter } from '@cdktn/provider-cloudflare'

new dataCloudflareFilter.DataCloudflareFilter(scope: Construct, id: string, config: DataCloudflareFilterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterConfig">DataCloudflareFilterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterConfig">DataCloudflareFilterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.resetFilterId">resetFilterId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.putFilter"></a>

```typescript
public putFilter(value: DataCloudflareFilterFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilter">DataCloudflareFilterFilter</a>

---

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetFilterId` <a name="resetFilterId" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.resetFilterId"></a>

```typescript
public resetFilterId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareFilter resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.isConstruct"></a>

```typescript
import { dataCloudflareFilter } from '@cdktn/provider-cloudflare'

dataCloudflareFilter.DataCloudflareFilter.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.isTerraformElement"></a>

```typescript
import { dataCloudflareFilter } from '@cdktn/provider-cloudflare'

dataCloudflareFilter.DataCloudflareFilter.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.isTerraformDataSource"></a>

```typescript
import { dataCloudflareFilter } from '@cdktn/provider-cloudflare'

dataCloudflareFilter.DataCloudflareFilter.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.generateConfigForImport"></a>

```typescript
import { dataCloudflareFilter } from '@cdktn/provider-cloudflare'

dataCloudflareFilter.DataCloudflareFilter.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflareFilter resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareFilter to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareFilter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/filter#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareFilter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilterOutputReference">DataCloudflareFilterFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.property.paused">paused</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.property.filterIdInput">filterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.property.filterInput">filterInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilter">DataCloudflareFilterFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.property.filterId">filterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.property.filter"></a>

```typescript
public readonly filter: DataCloudflareFilterFilterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilterOutputReference">DataCloudflareFilterFilterOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `paused`<sup>Required</sup> <a name="paused" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.property.paused"></a>

```typescript
public readonly paused: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `filterIdInput`<sup>Optional</sup> <a name="filterIdInput" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.property.filterIdInput"></a>

```typescript
public readonly filterIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataCloudflareFilterFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilter">DataCloudflareFilterFilter</a>

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `filterId`<sup>Required</sup> <a name="filterId" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.property.filterId"></a>

```typescript
public readonly filterId: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilter.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareFilterConfig <a name="DataCloudflareFilterConfig" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterConfig.Initializer"></a>

```typescript
import { dataCloudflareFilter } from '@cdktn/provider-cloudflare'

const dataCloudflareFilterConfig: dataCloudflareFilter.DataCloudflareFilterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterConfig.property.zoneId">zoneId</a></code> | <code>string</code> | Defines an identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterConfig.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilter">DataCloudflareFilterFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/filter#filter DataCloudflareFilter#filter}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterConfig.property.filterId">filterId</a></code> | <code>string</code> | The unique identifier of the filter. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

Defines an identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/filter#zone_id DataCloudflareFilter#zone_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterConfig.property.filter"></a>

```typescript
public readonly filter: DataCloudflareFilterFilter;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilter">DataCloudflareFilterFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/filter#filter DataCloudflareFilter#filter}.

---

##### `filterId`<sup>Optional</sup> <a name="filterId" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterConfig.property.filterId"></a>

```typescript
public readonly filterId: string;
```

- *Type:* string

The unique identifier of the filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/filter#filter_id DataCloudflareFilter#filter_id}

---

### DataCloudflareFilterFilter <a name="DataCloudflareFilterFilter" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilter.Initializer"></a>

```typescript
import { dataCloudflareFilter } from '@cdktn/provider-cloudflare'

const dataCloudflareFilterFilter: dataCloudflareFilter.DataCloudflareFilterFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilter.property.description">description</a></code> | <code>string</code> | A case-insensitive string to find in the description. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilter.property.expression">expression</a></code> | <code>string</code> | A case-insensitive string to find in the expression. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilter.property.id">id</a></code> | <code>string</code> | The unique identifier of the filter. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilter.property.paused">paused</a></code> | <code>boolean \| cdktn.IResolvable</code> | When true, indicates that the filter is currently paused. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilter.property.ref">ref</a></code> | <code>string</code> | The filter ref (a short reference tag) to search for. Must be an exact match. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilter.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A case-insensitive string to find in the description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/filter#description DataCloudflareFilter#description}

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilter.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

A case-insensitive string to find in the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/filter#expression DataCloudflareFilter#expression}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilter.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The unique identifier of the filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/filter#id DataCloudflareFilter#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `paused`<sup>Optional</sup> <a name="paused" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilter.property.paused"></a>

```typescript
public readonly paused: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When true, indicates that the filter is currently paused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/filter#paused DataCloudflareFilter#paused}

---

##### `ref`<sup>Optional</sup> <a name="ref" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilter.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

The filter ref (a short reference tag) to search for. Must be an exact match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/filter#ref DataCloudflareFilter#ref}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareFilterFilterOutputReference <a name="DataCloudflareFilterFilterOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilterOutputReference.Initializer"></a>

```typescript
import { dataCloudflareFilter } from '@cdktn/provider-cloudflare'

new dataCloudflareFilter.DataCloudflareFilterFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilterOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilterOutputReference.resetExpression">resetExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilterOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilterOutputReference.resetPaused">resetPaused</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilterOutputReference.resetRef">resetRef</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilterOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetExpression` <a name="resetExpression" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilterOutputReference.resetExpression"></a>

```typescript
public resetExpression(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilterOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPaused` <a name="resetPaused" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilterOutputReference.resetPaused"></a>

```typescript
public resetPaused(): void
```

##### `resetRef` <a name="resetRef" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilterOutputReference.resetRef"></a>

```typescript
public resetRef(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilterOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilterOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilterOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilterOutputReference.property.pausedInput">pausedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilterOutputReference.property.refInput">refInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilterOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilterOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilterOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilterOutputReference.property.paused">paused</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilterOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilter">DataCloudflareFilterFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilterOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilterOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilterOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `pausedInput`<sup>Optional</sup> <a name="pausedInput" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilterOutputReference.property.pausedInput"></a>

```typescript
public readonly pausedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `refInput`<sup>Optional</sup> <a name="refInput" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilterOutputReference.property.refInput"></a>

```typescript
public readonly refInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilterOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilterOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilterOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `paused`<sup>Required</sup> <a name="paused" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilterOutputReference.property.paused"></a>

```typescript
public readonly paused: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilterOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataCloudflareFilterFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.dataCloudflareFilter.DataCloudflareFilterFilter">DataCloudflareFilterFilter</a>

---



