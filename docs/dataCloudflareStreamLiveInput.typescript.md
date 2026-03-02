# `dataCloudflareStreamLiveInput` Submodule <a name="`dataCloudflareStreamLiveInput` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareStreamLiveInput <a name="DataCloudflareStreamLiveInput" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/stream_live_input cloudflare_stream_live_input}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.Initializer"></a>

```typescript
import { dataCloudflareStreamLiveInput } from '@cdktn/provider-cloudflare'

new dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput(scope: Construct, id: string, config: DataCloudflareStreamLiveInputConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputConfig">DataCloudflareStreamLiveInputConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputConfig">DataCloudflareStreamLiveInputConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareStreamLiveInput resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.isConstruct"></a>

```typescript
import { dataCloudflareStreamLiveInput } from '@cdktn/provider-cloudflare'

dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.isTerraformElement"></a>

```typescript
import { dataCloudflareStreamLiveInput } from '@cdktn/provider-cloudflare'

dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.isTerraformDataSource"></a>

```typescript
import { dataCloudflareStreamLiveInput } from '@cdktn/provider-cloudflare'

dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.generateConfigForImport"></a>

```typescript
import { dataCloudflareStreamLiveInput } from '@cdktn/provider-cloudflare'

dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflareStreamLiveInput resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareStreamLiveInput to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareStreamLiveInput that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/stream_live_input#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareStreamLiveInput to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.deleteRecordingAfterDays">deleteRecordingAfterDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.meta">meta</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.modified">modified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.recording">recording</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference">DataCloudflareStreamLiveInputRecordingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.rtmps">rtmps</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference">DataCloudflareStreamLiveInputRtmpsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.rtmpsPlayback">rtmpsPlayback</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference">DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.srt">srt</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference">DataCloudflareStreamLiveInputSrtOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.srtPlayback">srtPlayback</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference">DataCloudflareStreamLiveInputSrtPlaybackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.webRtc">webRtc</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference">DataCloudflareStreamLiveInputWebRtcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.webRtcPlayback">webRtcPlayback</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference">DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.liveInputIdentifierInput">liveInputIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.liveInputIdentifier">liveInputIdentifier</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `deleteRecordingAfterDays`<sup>Required</sup> <a name="deleteRecordingAfterDays" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.deleteRecordingAfterDays"></a>

```typescript
public readonly deleteRecordingAfterDays: number;
```

- *Type:* number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `meta`<sup>Required</sup> <a name="meta" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.meta"></a>

```typescript
public readonly meta: string;
```

- *Type:* string

---

##### `modified`<sup>Required</sup> <a name="modified" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.modified"></a>

```typescript
public readonly modified: string;
```

- *Type:* string

---

##### `recording`<sup>Required</sup> <a name="recording" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.recording"></a>

```typescript
public readonly recording: DataCloudflareStreamLiveInputRecordingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference">DataCloudflareStreamLiveInputRecordingOutputReference</a>

---

##### `rtmps`<sup>Required</sup> <a name="rtmps" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.rtmps"></a>

```typescript
public readonly rtmps: DataCloudflareStreamLiveInputRtmpsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference">DataCloudflareStreamLiveInputRtmpsOutputReference</a>

---

##### `rtmpsPlayback`<sup>Required</sup> <a name="rtmpsPlayback" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.rtmpsPlayback"></a>

```typescript
public readonly rtmpsPlayback: DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference">DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference</a>

---

##### `srt`<sup>Required</sup> <a name="srt" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.srt"></a>

```typescript
public readonly srt: DataCloudflareStreamLiveInputSrtOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference">DataCloudflareStreamLiveInputSrtOutputReference</a>

---

##### `srtPlayback`<sup>Required</sup> <a name="srtPlayback" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.srtPlayback"></a>

```typescript
public readonly srtPlayback: DataCloudflareStreamLiveInputSrtPlaybackOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference">DataCloudflareStreamLiveInputSrtPlaybackOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `webRtc`<sup>Required</sup> <a name="webRtc" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.webRtc"></a>

```typescript
public readonly webRtc: DataCloudflareStreamLiveInputWebRtcOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference">DataCloudflareStreamLiveInputWebRtcOutputReference</a>

---

##### `webRtcPlayback`<sup>Required</sup> <a name="webRtcPlayback" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.webRtcPlayback"></a>

```typescript
public readonly webRtcPlayback: DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference">DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `liveInputIdentifierInput`<sup>Optional</sup> <a name="liveInputIdentifierInput" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.liveInputIdentifierInput"></a>

```typescript
public readonly liveInputIdentifierInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `liveInputIdentifier`<sup>Required</sup> <a name="liveInputIdentifier" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.liveInputIdentifier"></a>

```typescript
public readonly liveInputIdentifier: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareStreamLiveInputConfig <a name="DataCloudflareStreamLiveInputConfig" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputConfig.Initializer"></a>

```typescript
import { dataCloudflareStreamLiveInput } from '@cdktn/provider-cloudflare'

const dataCloudflareStreamLiveInputConfig: dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputConfig.property.accountId">accountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputConfig.property.liveInputIdentifier">liveInputIdentifier</a></code> | <code>string</code> | A unique identifier for a live input. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/stream_live_input#account_id DataCloudflareStreamLiveInput#account_id}

---

##### `liveInputIdentifier`<sup>Required</sup> <a name="liveInputIdentifier" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputConfig.property.liveInputIdentifier"></a>

```typescript
public readonly liveInputIdentifier: string;
```

- *Type:* string

A unique identifier for a live input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/stream_live_input#live_input_identifier DataCloudflareStreamLiveInput#live_input_identifier}

---

### DataCloudflareStreamLiveInputRecording <a name="DataCloudflareStreamLiveInputRecording" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecording"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecording.Initializer"></a>

```typescript
import { dataCloudflareStreamLiveInput } from '@cdktn/provider-cloudflare'

const dataCloudflareStreamLiveInputRecording: dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecording = { ... }
```


### DataCloudflareStreamLiveInputRtmps <a name="DataCloudflareStreamLiveInputRtmps" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmps.Initializer"></a>

```typescript
import { dataCloudflareStreamLiveInput } from '@cdktn/provider-cloudflare'

const dataCloudflareStreamLiveInputRtmps: dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmps = { ... }
```


### DataCloudflareStreamLiveInputRtmpsPlayback <a name="DataCloudflareStreamLiveInputRtmpsPlayback" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlayback"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlayback.Initializer"></a>

```typescript
import { dataCloudflareStreamLiveInput } from '@cdktn/provider-cloudflare'

const dataCloudflareStreamLiveInputRtmpsPlayback: dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlayback = { ... }
```


### DataCloudflareStreamLiveInputSrt <a name="DataCloudflareStreamLiveInputSrt" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrt"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrt.Initializer"></a>

```typescript
import { dataCloudflareStreamLiveInput } from '@cdktn/provider-cloudflare'

const dataCloudflareStreamLiveInputSrt: dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrt = { ... }
```


### DataCloudflareStreamLiveInputSrtPlayback <a name="DataCloudflareStreamLiveInputSrtPlayback" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlayback"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlayback.Initializer"></a>

```typescript
import { dataCloudflareStreamLiveInput } from '@cdktn/provider-cloudflare'

const dataCloudflareStreamLiveInputSrtPlayback: dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlayback = { ... }
```


### DataCloudflareStreamLiveInputWebRtc <a name="DataCloudflareStreamLiveInputWebRtc" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtc.Initializer"></a>

```typescript
import { dataCloudflareStreamLiveInput } from '@cdktn/provider-cloudflare'

const dataCloudflareStreamLiveInputWebRtc: dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtc = { ... }
```


### DataCloudflareStreamLiveInputWebRtcPlayback <a name="DataCloudflareStreamLiveInputWebRtcPlayback" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlayback"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlayback.Initializer"></a>

```typescript
import { dataCloudflareStreamLiveInput } from '@cdktn/provider-cloudflare'

const dataCloudflareStreamLiveInputWebRtcPlayback: dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlayback = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareStreamLiveInputRecordingOutputReference <a name="DataCloudflareStreamLiveInputRecordingOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.Initializer"></a>

```typescript
import { dataCloudflareStreamLiveInput } from '@cdktn/provider-cloudflare'

new dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.property.allowedOrigins">allowedOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.property.hideLiveViewerCount">hideLiveViewerCount</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.property.requireSignedUrls">requireSignedUrls</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecording">DataCloudflareStreamLiveInputRecording</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedOrigins`<sup>Required</sup> <a name="allowedOrigins" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.property.allowedOrigins"></a>

```typescript
public readonly allowedOrigins: string[];
```

- *Type:* string[]

---

##### `hideLiveViewerCount`<sup>Required</sup> <a name="hideLiveViewerCount" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.property.hideLiveViewerCount"></a>

```typescript
public readonly hideLiveViewerCount: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `requireSignedUrls`<sup>Required</sup> <a name="requireSignedUrls" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.property.requireSignedUrls"></a>

```typescript
public readonly requireSignedUrls: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareStreamLiveInputRecording;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecording">DataCloudflareStreamLiveInputRecording</a>

---


### DataCloudflareStreamLiveInputRtmpsOutputReference <a name="DataCloudflareStreamLiveInputRtmpsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.Initializer"></a>

```typescript
import { dataCloudflareStreamLiveInput } from '@cdktn/provider-cloudflare'

new dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.property.streamKey">streamKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmps">DataCloudflareStreamLiveInputRtmps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `streamKey`<sup>Required</sup> <a name="streamKey" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.property.streamKey"></a>

```typescript
public readonly streamKey: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareStreamLiveInputRtmps;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmps">DataCloudflareStreamLiveInputRtmps</a>

---


### DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference <a name="DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.Initializer"></a>

```typescript
import { dataCloudflareStreamLiveInput } from '@cdktn/provider-cloudflare'

new dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.property.streamKey">streamKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlayback">DataCloudflareStreamLiveInputRtmpsPlayback</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `streamKey`<sup>Required</sup> <a name="streamKey" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.property.streamKey"></a>

```typescript
public readonly streamKey: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareStreamLiveInputRtmpsPlayback;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlayback">DataCloudflareStreamLiveInputRtmpsPlayback</a>

---


### DataCloudflareStreamLiveInputSrtOutputReference <a name="DataCloudflareStreamLiveInputSrtOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.Initializer"></a>

```typescript
import { dataCloudflareStreamLiveInput } from '@cdktn/provider-cloudflare'

new dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.property.passphrase">passphrase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.property.streamId">streamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrt">DataCloudflareStreamLiveInputSrt</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `passphrase`<sup>Required</sup> <a name="passphrase" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.property.passphrase"></a>

```typescript
public readonly passphrase: string;
```

- *Type:* string

---

##### `streamId`<sup>Required</sup> <a name="streamId" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.property.streamId"></a>

```typescript
public readonly streamId: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareStreamLiveInputSrt;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrt">DataCloudflareStreamLiveInputSrt</a>

---


### DataCloudflareStreamLiveInputSrtPlaybackOutputReference <a name="DataCloudflareStreamLiveInputSrtPlaybackOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.Initializer"></a>

```typescript
import { dataCloudflareStreamLiveInput } from '@cdktn/provider-cloudflare'

new dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.property.passphrase">passphrase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.property.streamId">streamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlayback">DataCloudflareStreamLiveInputSrtPlayback</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `passphrase`<sup>Required</sup> <a name="passphrase" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.property.passphrase"></a>

```typescript
public readonly passphrase: string;
```

- *Type:* string

---

##### `streamId`<sup>Required</sup> <a name="streamId" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.property.streamId"></a>

```typescript
public readonly streamId: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareStreamLiveInputSrtPlayback;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlayback">DataCloudflareStreamLiveInputSrtPlayback</a>

---


### DataCloudflareStreamLiveInputWebRtcOutputReference <a name="DataCloudflareStreamLiveInputWebRtcOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.Initializer"></a>

```typescript
import { dataCloudflareStreamLiveInput } from '@cdktn/provider-cloudflare'

new dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtc">DataCloudflareStreamLiveInputWebRtc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareStreamLiveInputWebRtc;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtc">DataCloudflareStreamLiveInputWebRtc</a>

---


### DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference <a name="DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.Initializer"></a>

```typescript
import { dataCloudflareStreamLiveInput } from '@cdktn/provider-cloudflare'

new dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlayback">DataCloudflareStreamLiveInputWebRtcPlayback</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareStreamLiveInputWebRtcPlayback;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlayback">DataCloudflareStreamLiveInputWebRtcPlayback</a>

---



