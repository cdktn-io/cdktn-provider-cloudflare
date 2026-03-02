# `dataCloudflareCloudforceOneRequestPriority` Submodule <a name="`dataCloudflareCloudforceOneRequestPriority` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareCloudforceOneRequestPriority <a name="DataCloudflareCloudforceOneRequestPriority" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/cloudforce_one_request_priority cloudflare_cloudforce_one_request_priority}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.Initializer"></a>

```typescript
import { dataCloudflareCloudforceOneRequestPriority } from '@cdktn/provider-cloudflare'

new dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority(scope: Construct, id: string, config: DataCloudflareCloudforceOneRequestPriorityConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriorityConfig">DataCloudflareCloudforceOneRequestPriorityConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriorityConfig">DataCloudflareCloudforceOneRequestPriorityConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareCloudforceOneRequestPriority resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.isConstruct"></a>

```typescript
import { dataCloudflareCloudforceOneRequestPriority } from '@cdktn/provider-cloudflare'

dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.isTerraformElement"></a>

```typescript
import { dataCloudflareCloudforceOneRequestPriority } from '@cdktn/provider-cloudflare'

dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.isTerraformDataSource"></a>

```typescript
import { dataCloudflareCloudforceOneRequestPriority } from '@cdktn/provider-cloudflare'

dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.generateConfigForImport"></a>

```typescript
import { dataCloudflareCloudforceOneRequestPriority } from '@cdktn/provider-cloudflare'

dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflareCloudforceOneRequestPriority resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareCloudforceOneRequestPriority to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareCloudforceOneRequestPriority that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/cloudforce_one_request_priority#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareCloudforceOneRequestPriority to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.completed">completed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.messageTokens">messageTokens</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.priority">priority</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.readableId">readableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.request">request</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.summary">summary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.tlp">tlp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.tokens">tokens</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.updated">updated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.priorityIdInput">priorityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.priorityId">priorityId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `completed`<sup>Required</sup> <a name="completed" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.completed"></a>

```typescript
public readonly completed: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `messageTokens`<sup>Required</sup> <a name="messageTokens" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.messageTokens"></a>

```typescript
public readonly messageTokens: number;
```

- *Type:* number

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.priority"></a>

```typescript
public readonly priority: string;
```

- *Type:* string

---

##### `readableId`<sup>Required</sup> <a name="readableId" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.readableId"></a>

```typescript
public readonly readableId: string;
```

- *Type:* string

---

##### `request`<sup>Required</sup> <a name="request" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.request"></a>

```typescript
public readonly request: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.summary"></a>

```typescript
public readonly summary: string;
```

- *Type:* string

---

##### `tlp`<sup>Required</sup> <a name="tlp" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.tlp"></a>

```typescript
public readonly tlp: string;
```

- *Type:* string

---

##### `tokens`<sup>Required</sup> <a name="tokens" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.tokens"></a>

```typescript
public readonly tokens: number;
```

- *Type:* number

---

##### `updated`<sup>Required</sup> <a name="updated" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.updated"></a>

```typescript
public readonly updated: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `priorityIdInput`<sup>Optional</sup> <a name="priorityIdInput" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.priorityIdInput"></a>

```typescript
public readonly priorityIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `priorityId`<sup>Required</sup> <a name="priorityId" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.priorityId"></a>

```typescript
public readonly priorityId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareCloudforceOneRequestPriorityConfig <a name="DataCloudflareCloudforceOneRequestPriorityConfig" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriorityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriorityConfig.Initializer"></a>

```typescript
import { dataCloudflareCloudforceOneRequestPriority } from '@cdktn/provider-cloudflare'

const dataCloudflareCloudforceOneRequestPriorityConfig: dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriorityConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriorityConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriorityConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriorityConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriorityConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriorityConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriorityConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriorityConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriorityConfig.property.accountId">accountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriorityConfig.property.priorityId">priorityId</a></code> | <code>string</code> | UUID. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriorityConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriorityConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriorityConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriorityConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriorityConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriorityConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriorityConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriorityConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/cloudforce_one_request_priority#account_id DataCloudflareCloudforceOneRequestPriority#account_id}

---

##### `priorityId`<sup>Required</sup> <a name="priorityId" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriorityConfig.property.priorityId"></a>

```typescript
public readonly priorityId: string;
```

- *Type:* string

UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/cloudforce_one_request_priority#priority_id DataCloudflareCloudforceOneRequestPriority#priority_id}

---



