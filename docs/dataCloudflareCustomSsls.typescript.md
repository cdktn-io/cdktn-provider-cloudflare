# `dataCloudflareCustomSsls` Submodule <a name="`dataCloudflareCustomSsls` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareCustomSsls <a name="DataCloudflareCustomSsls" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/custom_ssls cloudflare_custom_ssls}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.Initializer"></a>

```typescript
import { dataCloudflareCustomSsls } from '@cdktn/provider-cloudflare'

new dataCloudflareCustomSsls.DataCloudflareCustomSsls(scope: Construct, id: string, config: DataCloudflareCustomSslsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsConfig">DataCloudflareCustomSslsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsConfig">DataCloudflareCustomSslsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.resetMatch">resetMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.resetMaxItems">resetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetMatch` <a name="resetMatch" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.resetMatch"></a>

```typescript
public resetMatch(): void
```

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.resetMaxItems"></a>

```typescript
public resetMaxItems(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.resetStatus"></a>

```typescript
public resetStatus(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareCustomSsls resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.isConstruct"></a>

```typescript
import { dataCloudflareCustomSsls } from '@cdktn/provider-cloudflare'

dataCloudflareCustomSsls.DataCloudflareCustomSsls.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.isTerraformElement"></a>

```typescript
import { dataCloudflareCustomSsls } from '@cdktn/provider-cloudflare'

dataCloudflareCustomSsls.DataCloudflareCustomSsls.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.isTerraformDataSource"></a>

```typescript
import { dataCloudflareCustomSsls } from '@cdktn/provider-cloudflare'

dataCloudflareCustomSsls.DataCloudflareCustomSsls.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.generateConfigForImport"></a>

```typescript
import { dataCloudflareCustomSsls } from '@cdktn/provider-cloudflare'

dataCloudflareCustomSsls.DataCloudflareCustomSsls.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflareCustomSsls resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareCustomSsls to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareCustomSsls that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/custom_ssls#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareCustomSsls to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.property.result">result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultList">DataCloudflareCustomSslsResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.property.matchInput">matchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.property.maxItemsInput">maxItemsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.property.match">match</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.property.maxItems">maxItems</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.property.result"></a>

```typescript
public readonly result: DataCloudflareCustomSslsResultList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultList">DataCloudflareCustomSslsResultList</a>

---

##### `matchInput`<sup>Optional</sup> <a name="matchInput" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.property.matchInput"></a>

```typescript
public readonly matchInput: string;
```

- *Type:* string

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.property.maxItemsInput"></a>

```typescript
public readonly maxItemsInput: number;
```

- *Type:* number

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.property.match"></a>

```typescript
public readonly match: string;
```

- *Type:* string

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSsls.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareCustomSslsConfig <a name="DataCloudflareCustomSslsConfig" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsConfig.Initializer"></a>

```typescript
import { dataCloudflareCustomSsls } from '@cdktn/provider-cloudflare'

const dataCloudflareCustomSslsConfig: dataCloudflareCustomSsls.DataCloudflareCustomSslsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsConfig.property.zoneId">zoneId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsConfig.property.match">match</a></code> | <code>string</code> | Whether to match all search requirements or at least one (any). Available values: "any", "all". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsConfig.property.maxItems">maxItems</a></code> | <code>number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsConfig.property.status">status</a></code> | <code>string</code> | Status of the zone's custom SSL. Available values: "active", "expired", "deleted", "pending", "initializing". |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/custom_ssls#zone_id DataCloudflareCustomSsls#zone_id}

---

##### `match`<sup>Optional</sup> <a name="match" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsConfig.property.match"></a>

```typescript
public readonly match: string;
```

- *Type:* string

Whether to match all search requirements or at least one (any). Available values: "any", "all".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/custom_ssls#match DataCloudflareCustomSsls#match}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsConfig.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/custom_ssls#max_items DataCloudflareCustomSsls#max_items}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Status of the zone's custom SSL. Available values: "active", "expired", "deleted", "pending", "initializing".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/custom_ssls#status DataCloudflareCustomSsls#status}

---

### DataCloudflareCustomSslsResult <a name="DataCloudflareCustomSslsResult" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResult.Initializer"></a>

```typescript
import { dataCloudflareCustomSsls } from '@cdktn/provider-cloudflare'

const dataCloudflareCustomSslsResult: dataCloudflareCustomSsls.DataCloudflareCustomSslsResult = { ... }
```


### DataCloudflareCustomSslsResultGeoRestrictions <a name="DataCloudflareCustomSslsResultGeoRestrictions" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultGeoRestrictions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultGeoRestrictions.Initializer"></a>

```typescript
import { dataCloudflareCustomSsls } from '@cdktn/provider-cloudflare'

const dataCloudflareCustomSslsResultGeoRestrictions: dataCloudflareCustomSsls.DataCloudflareCustomSslsResultGeoRestrictions = { ... }
```


### DataCloudflareCustomSslsResultKeylessServer <a name="DataCloudflareCustomSslsResultKeylessServer" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServer.Initializer"></a>

```typescript
import { dataCloudflareCustomSsls } from '@cdktn/provider-cloudflare'

const dataCloudflareCustomSslsResultKeylessServer: dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServer = { ... }
```


### DataCloudflareCustomSslsResultKeylessServerTunnel <a name="DataCloudflareCustomSslsResultKeylessServerTunnel" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerTunnel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerTunnel.Initializer"></a>

```typescript
import { dataCloudflareCustomSsls } from '@cdktn/provider-cloudflare'

const dataCloudflareCustomSslsResultKeylessServerTunnel: dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerTunnel = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareCustomSslsResultGeoRestrictionsOutputReference <a name="DataCloudflareCustomSslsResultGeoRestrictionsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultGeoRestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultGeoRestrictionsOutputReference.Initializer"></a>

```typescript
import { dataCloudflareCustomSsls } from '@cdktn/provider-cloudflare'

new dataCloudflareCustomSsls.DataCloudflareCustomSslsResultGeoRestrictionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultGeoRestrictionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultGeoRestrictionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultGeoRestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultGeoRestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultGeoRestrictionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultGeoRestrictionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultGeoRestrictionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultGeoRestrictionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultGeoRestrictionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultGeoRestrictionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultGeoRestrictionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultGeoRestrictionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultGeoRestrictionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultGeoRestrictionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultGeoRestrictionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultGeoRestrictionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultGeoRestrictionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultGeoRestrictionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultGeoRestrictionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultGeoRestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultGeoRestrictionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultGeoRestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultGeoRestrictionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultGeoRestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultGeoRestrictionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultGeoRestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultGeoRestrictionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultGeoRestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultGeoRestrictionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultGeoRestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultGeoRestrictionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultGeoRestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultGeoRestrictionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultGeoRestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultGeoRestrictionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultGeoRestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultGeoRestrictionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultGeoRestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultGeoRestrictionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultGeoRestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultGeoRestrictionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultGeoRestrictionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultGeoRestrictionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultGeoRestrictionsOutputReference.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultGeoRestrictionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultGeoRestrictions">DataCloudflareCustomSslsResultGeoRestrictions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultGeoRestrictionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultGeoRestrictionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultGeoRestrictionsOutputReference.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultGeoRestrictionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareCustomSslsResultGeoRestrictions;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultGeoRestrictions">DataCloudflareCustomSslsResultGeoRestrictions</a>

---


### DataCloudflareCustomSslsResultKeylessServerOutputReference <a name="DataCloudflareCustomSslsResultKeylessServerOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerOutputReference.Initializer"></a>

```typescript
import { dataCloudflareCustomSsls } from '@cdktn/provider-cloudflare'

new dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerOutputReference.property.modifiedOn">modifiedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerOutputReference.property.permissions">permissions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerOutputReference.property.tunnel">tunnel</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerTunnelOutputReference">DataCloudflareCustomSslsResultKeylessServerTunnelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServer">DataCloudflareCustomSslsResultKeylessServer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `modifiedOn`<sup>Required</sup> <a name="modifiedOn" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerOutputReference.property.modifiedOn"></a>

```typescript
public readonly modifiedOn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerOutputReference.property.permissions"></a>

```typescript
public readonly permissions: string[];
```

- *Type:* string[]

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tunnel`<sup>Required</sup> <a name="tunnel" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerOutputReference.property.tunnel"></a>

```typescript
public readonly tunnel: DataCloudflareCustomSslsResultKeylessServerTunnelOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerTunnelOutputReference">DataCloudflareCustomSslsResultKeylessServerTunnelOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareCustomSslsResultKeylessServer;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServer">DataCloudflareCustomSslsResultKeylessServer</a>

---


### DataCloudflareCustomSslsResultKeylessServerTunnelOutputReference <a name="DataCloudflareCustomSslsResultKeylessServerTunnelOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerTunnelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerTunnelOutputReference.Initializer"></a>

```typescript
import { dataCloudflareCustomSsls } from '@cdktn/provider-cloudflare'

new dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerTunnelOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerTunnelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerTunnelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerTunnelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerTunnelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerTunnelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerTunnelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerTunnelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerTunnelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerTunnelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerTunnelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerTunnelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerTunnelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerTunnelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerTunnelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerTunnelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerTunnelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerTunnelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerTunnelOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerTunnelOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerTunnelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerTunnelOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerTunnelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerTunnelOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerTunnelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerTunnelOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerTunnelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerTunnelOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerTunnelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerTunnelOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerTunnelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerTunnelOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerTunnelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerTunnelOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerTunnelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerTunnelOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerTunnelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerTunnelOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerTunnelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerTunnelOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerTunnelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerTunnelOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerTunnelOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerTunnelOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerTunnelOutputReference.property.privateIp">privateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerTunnelOutputReference.property.vnetId">vnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerTunnelOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerTunnel">DataCloudflareCustomSslsResultKeylessServerTunnel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerTunnelOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerTunnelOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `privateIp`<sup>Required</sup> <a name="privateIp" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerTunnelOutputReference.property.privateIp"></a>

```typescript
public readonly privateIp: string;
```

- *Type:* string

---

##### `vnetId`<sup>Required</sup> <a name="vnetId" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerTunnelOutputReference.property.vnetId"></a>

```typescript
public readonly vnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerTunnelOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareCustomSslsResultKeylessServerTunnel;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerTunnel">DataCloudflareCustomSslsResultKeylessServerTunnel</a>

---


### DataCloudflareCustomSslsResultList <a name="DataCloudflareCustomSslsResultList" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultList.Initializer"></a>

```typescript
import { dataCloudflareCustomSsls } from '@cdktn/provider-cloudflare'

new dataCloudflareCustomSsls.DataCloudflareCustomSslsResultList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultList.get"></a>

```typescript
public get(index: number): DataCloudflareCustomSslsResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareCustomSslsResultOutputReference <a name="DataCloudflareCustomSslsResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference.Initializer"></a>

```typescript
import { dataCloudflareCustomSsls } from '@cdktn/provider-cloudflare'

new dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference.property.bundleMethod">bundleMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference.property.expiresOn">expiresOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference.property.geoRestrictions">geoRestrictions</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultGeoRestrictionsOutputReference">DataCloudflareCustomSslsResultGeoRestrictionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference.property.hosts">hosts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference.property.issuer">issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference.property.keylessServer">keylessServer</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerOutputReference">DataCloudflareCustomSslsResultKeylessServerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference.property.modifiedOn">modifiedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference.property.policy">policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference.property.signature">signature</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference.property.uploadedOn">uploadedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResult">DataCloudflareCustomSslsResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bundleMethod`<sup>Required</sup> <a name="bundleMethod" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference.property.bundleMethod"></a>

```typescript
public readonly bundleMethod: string;
```

- *Type:* string

---

##### `expiresOn`<sup>Required</sup> <a name="expiresOn" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference.property.expiresOn"></a>

```typescript
public readonly expiresOn: string;
```

- *Type:* string

---

##### `geoRestrictions`<sup>Required</sup> <a name="geoRestrictions" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference.property.geoRestrictions"></a>

```typescript
public readonly geoRestrictions: DataCloudflareCustomSslsResultGeoRestrictionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultGeoRestrictionsOutputReference">DataCloudflareCustomSslsResultGeoRestrictionsOutputReference</a>

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference.property.hosts"></a>

```typescript
public readonly hosts: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

---

##### `keylessServer`<sup>Required</sup> <a name="keylessServer" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference.property.keylessServer"></a>

```typescript
public readonly keylessServer: DataCloudflareCustomSslsResultKeylessServerOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultKeylessServerOutputReference">DataCloudflareCustomSslsResultKeylessServerOutputReference</a>

---

##### `modifiedOn`<sup>Required</sup> <a name="modifiedOn" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference.property.modifiedOn"></a>

```typescript
public readonly modifiedOn: string;
```

- *Type:* string

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `signature`<sup>Required</sup> <a name="signature" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference.property.signature"></a>

```typescript
public readonly signature: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `uploadedOn`<sup>Required</sup> <a name="uploadedOn" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference.property.uploadedOn"></a>

```typescript
public readonly uploadedOn: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResultOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareCustomSslsResult;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareCustomSsls.DataCloudflareCustomSslsResult">DataCloudflareCustomSslsResult</a>

---



