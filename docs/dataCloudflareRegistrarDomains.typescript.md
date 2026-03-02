# `dataCloudflareRegistrarDomains` Submodule <a name="`dataCloudflareRegistrarDomains` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareRegistrarDomains <a name="DataCloudflareRegistrarDomains" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/registrar_domains cloudflare_registrar_domains}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.Initializer"></a>

```typescript
import { dataCloudflareRegistrarDomains } from '@cdktn/provider-cloudflare'

new dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains(scope: Construct, id: string, config: DataCloudflareRegistrarDomainsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsConfig">DataCloudflareRegistrarDomainsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsConfig">DataCloudflareRegistrarDomainsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.resetMaxItems">resetMaxItems</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.resetMaxItems"></a>

```typescript
public resetMaxItems(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareRegistrarDomains resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.isConstruct"></a>

```typescript
import { dataCloudflareRegistrarDomains } from '@cdktn/provider-cloudflare'

dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.isTerraformElement"></a>

```typescript
import { dataCloudflareRegistrarDomains } from '@cdktn/provider-cloudflare'

dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.isTerraformDataSource"></a>

```typescript
import { dataCloudflareRegistrarDomains } from '@cdktn/provider-cloudflare'

dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.generateConfigForImport"></a>

```typescript
import { dataCloudflareRegistrarDomains } from '@cdktn/provider-cloudflare'

dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflareRegistrarDomains resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareRegistrarDomains to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareRegistrarDomains that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/registrar_domains#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareRegistrarDomains to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.result">result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList">DataCloudflareRegistrarDomainsResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.maxItemsInput">maxItemsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.maxItems">maxItems</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.result"></a>

```typescript
public readonly result: DataCloudflareRegistrarDomainsResultList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList">DataCloudflareRegistrarDomainsResultList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.maxItemsInput"></a>

```typescript
public readonly maxItemsInput: number;
```

- *Type:* number

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareRegistrarDomainsConfig <a name="DataCloudflareRegistrarDomainsConfig" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsConfig.Initializer"></a>

```typescript
import { dataCloudflareRegistrarDomains } from '@cdktn/provider-cloudflare'

const dataCloudflareRegistrarDomainsConfig: dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsConfig.property.accountId">accountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsConfig.property.maxItems">maxItems</a></code> | <code>number</code> | Max items to fetch, default: 1000. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/registrar_domains#account_id DataCloudflareRegistrarDomains#account_id}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsConfig.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/registrar_domains#max_items DataCloudflareRegistrarDomains#max_items}

---

### DataCloudflareRegistrarDomainsResult <a name="DataCloudflareRegistrarDomainsResult" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResult.Initializer"></a>

```typescript
import { dataCloudflareRegistrarDomains } from '@cdktn/provider-cloudflare'

const dataCloudflareRegistrarDomainsResult: dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResult = { ... }
```


### DataCloudflareRegistrarDomainsResultRegistrantContact <a name="DataCloudflareRegistrarDomainsResultRegistrantContact" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContact"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContact.Initializer"></a>

```typescript
import { dataCloudflareRegistrarDomains } from '@cdktn/provider-cloudflare'

const dataCloudflareRegistrarDomainsResultRegistrantContact: dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContact = { ... }
```


### DataCloudflareRegistrarDomainsResultTransferIn <a name="DataCloudflareRegistrarDomainsResultTransferIn" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferIn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferIn.Initializer"></a>

```typescript
import { dataCloudflareRegistrarDomains } from '@cdktn/provider-cloudflare'

const dataCloudflareRegistrarDomainsResultTransferIn: dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferIn = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareRegistrarDomainsResultList <a name="DataCloudflareRegistrarDomainsResultList" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList.Initializer"></a>

```typescript
import { dataCloudflareRegistrarDomains } from '@cdktn/provider-cloudflare'

new dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList.get"></a>

```typescript
public get(index: number): DataCloudflareRegistrarDomainsResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareRegistrarDomainsResultOutputReference <a name="DataCloudflareRegistrarDomainsResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.Initializer"></a>

```typescript
import { dataCloudflareRegistrarDomains } from '@cdktn/provider-cloudflare'

new dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.available">available</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.canRegister">canRegister</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.currentRegistrar">currentRegistrar</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.expiresAt">expiresAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.locked">locked</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.registrantContact">registrantContact</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference">DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.registryStatuses">registryStatuses</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.supportedTld">supportedTld</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.transferIn">transferIn</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference">DataCloudflareRegistrarDomainsResultTransferInOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResult">DataCloudflareRegistrarDomainsResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `available`<sup>Required</sup> <a name="available" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.available"></a>

```typescript
public readonly available: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `canRegister`<sup>Required</sup> <a name="canRegister" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.canRegister"></a>

```typescript
public readonly canRegister: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `currentRegistrar`<sup>Required</sup> <a name="currentRegistrar" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.currentRegistrar"></a>

```typescript
public readonly currentRegistrar: string;
```

- *Type:* string

---

##### `expiresAt`<sup>Required</sup> <a name="expiresAt" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.expiresAt"></a>

```typescript
public readonly expiresAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `locked`<sup>Required</sup> <a name="locked" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.locked"></a>

```typescript
public readonly locked: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `registrantContact`<sup>Required</sup> <a name="registrantContact" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.registrantContact"></a>

```typescript
public readonly registrantContact: DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference">DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference</a>

---

##### `registryStatuses`<sup>Required</sup> <a name="registryStatuses" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.registryStatuses"></a>

```typescript
public readonly registryStatuses: string;
```

- *Type:* string

---

##### `supportedTld`<sup>Required</sup> <a name="supportedTld" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.supportedTld"></a>

```typescript
public readonly supportedTld: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `transferIn`<sup>Required</sup> <a name="transferIn" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.transferIn"></a>

```typescript
public readonly transferIn: DataCloudflareRegistrarDomainsResultTransferInOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference">DataCloudflareRegistrarDomainsResultTransferInOutputReference</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareRegistrarDomainsResult;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResult">DataCloudflareRegistrarDomainsResult</a>

---


### DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference <a name="DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.Initializer"></a>

```typescript
import { dataCloudflareRegistrarDomains } from '@cdktn/provider-cloudflare'

new dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.address2">address2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.city">city</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.country">country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.fax">fax</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.firstName">firstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.lastName">lastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.organization">organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.phone">phone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.zip">zip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContact">DataCloudflareRegistrarDomainsResultRegistrantContact</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `address2`<sup>Required</sup> <a name="address2" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.address2"></a>

```typescript
public readonly address2: string;
```

- *Type:* string

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.city"></a>

```typescript
public readonly city: string;
```

- *Type:* string

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `fax`<sup>Required</sup> <a name="fax" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.fax"></a>

```typescript
public readonly fax: string;
```

- *Type:* string

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

##### `phone`<sup>Required</sup> <a name="phone" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.phone"></a>

```typescript
public readonly phone: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `zip`<sup>Required</sup> <a name="zip" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.zip"></a>

```typescript
public readonly zip: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareRegistrarDomainsResultRegistrantContact;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContact">DataCloudflareRegistrarDomainsResultRegistrantContact</a>

---


### DataCloudflareRegistrarDomainsResultTransferInOutputReference <a name="DataCloudflareRegistrarDomainsResultTransferInOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.Initializer"></a>

```typescript
import { dataCloudflareRegistrarDomains } from '@cdktn/provider-cloudflare'

new dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.property.acceptFoa">acceptFoa</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.property.approveTransfer">approveTransfer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.property.canCancelTransfer">canCancelTransfer</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.property.disablePrivacy">disablePrivacy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.property.enterAuthCode">enterAuthCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.property.unlockDomain">unlockDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferIn">DataCloudflareRegistrarDomainsResultTransferIn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `acceptFoa`<sup>Required</sup> <a name="acceptFoa" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.property.acceptFoa"></a>

```typescript
public readonly acceptFoa: string;
```

- *Type:* string

---

##### `approveTransfer`<sup>Required</sup> <a name="approveTransfer" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.property.approveTransfer"></a>

```typescript
public readonly approveTransfer: string;
```

- *Type:* string

---

##### `canCancelTransfer`<sup>Required</sup> <a name="canCancelTransfer" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.property.canCancelTransfer"></a>

```typescript
public readonly canCancelTransfer: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `disablePrivacy`<sup>Required</sup> <a name="disablePrivacy" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.property.disablePrivacy"></a>

```typescript
public readonly disablePrivacy: string;
```

- *Type:* string

---

##### `enterAuthCode`<sup>Required</sup> <a name="enterAuthCode" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.property.enterAuthCode"></a>

```typescript
public readonly enterAuthCode: string;
```

- *Type:* string

---

##### `unlockDomain`<sup>Required</sup> <a name="unlockDomain" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.property.unlockDomain"></a>

```typescript
public readonly unlockDomain: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareRegistrarDomainsResultTransferIn;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferIn">DataCloudflareRegistrarDomainsResultTransferIn</a>

---



