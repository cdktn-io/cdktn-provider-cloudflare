# `dataCloudflareAiSecurityCustomTopics` Submodule <a name="`dataCloudflareAiSecurityCustomTopics` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareAiSecurityCustomTopics <a name="DataCloudflareAiSecurityCustomTopics" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/ai_security_custom_topics cloudflare_ai_security_custom_topics}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.Initializer"></a>

```typescript
import { dataCloudflareAiSecurityCustomTopics } from '@cdktn/provider-cloudflare'

new dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics(scope: Construct, id: string, config: DataCloudflareAiSecurityCustomTopicsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsConfig">DataCloudflareAiSecurityCustomTopicsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsConfig">DataCloudflareAiSecurityCustomTopicsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareAiSecurityCustomTopics resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.isConstruct"></a>

```typescript
import { dataCloudflareAiSecurityCustomTopics } from '@cdktn/provider-cloudflare'

dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.isTerraformElement"></a>

```typescript
import { dataCloudflareAiSecurityCustomTopics } from '@cdktn/provider-cloudflare'

dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.isTerraformDataSource"></a>

```typescript
import { dataCloudflareAiSecurityCustomTopics } from '@cdktn/provider-cloudflare'

dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.generateConfigForImport"></a>

```typescript
import { dataCloudflareAiSecurityCustomTopics } from '@cdktn/provider-cloudflare'

dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflareAiSecurityCustomTopics resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareAiSecurityCustomTopics to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareAiSecurityCustomTopics that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/ai_security_custom_topics#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareAiSecurityCustomTopics to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.property.topics">topics</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsList">DataCloudflareAiSecurityCustomTopicsTopicsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `topics`<sup>Required</sup> <a name="topics" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.property.topics"></a>

```typescript
public readonly topics: DataCloudflareAiSecurityCustomTopicsTopicsList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsList">DataCloudflareAiSecurityCustomTopicsTopicsList</a>

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareAiSecurityCustomTopicsConfig <a name="DataCloudflareAiSecurityCustomTopicsConfig" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsConfig.Initializer"></a>

```typescript
import { dataCloudflareAiSecurityCustomTopics } from '@cdktn/provider-cloudflare'

const dataCloudflareAiSecurityCustomTopicsConfig: dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsConfig.property.zoneId">zoneId</a></code> | <code>string</code> | Defines the zone. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

Defines the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/ai_security_custom_topics#zone_id DataCloudflareAiSecurityCustomTopics#zone_id}

---

### DataCloudflareAiSecurityCustomTopicsTopics <a name="DataCloudflareAiSecurityCustomTopicsTopics" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopics.Initializer"></a>

```typescript
import { dataCloudflareAiSecurityCustomTopics } from '@cdktn/provider-cloudflare'

const dataCloudflareAiSecurityCustomTopicsTopics: dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopics = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareAiSecurityCustomTopicsTopicsList <a name="DataCloudflareAiSecurityCustomTopicsTopicsList" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsList.Initializer"></a>

```typescript
import { dataCloudflareAiSecurityCustomTopics } from '@cdktn/provider-cloudflare'

new dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsList.get"></a>

```typescript
public get(index: number): DataCloudflareAiSecurityCustomTopicsTopicsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareAiSecurityCustomTopicsTopicsOutputReference <a name="DataCloudflareAiSecurityCustomTopicsTopicsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.Initializer"></a>

```typescript
import { dataCloudflareAiSecurityCustomTopics } from '@cdktn/provider-cloudflare'

new dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.property.topic">topic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopics">DataCloudflareAiSecurityCustomTopicsTopics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.property.topic"></a>

```typescript
public readonly topic: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareAiSecurityCustomTopicsTopics;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopics">DataCloudflareAiSecurityCustomTopicsTopics</a>

---



