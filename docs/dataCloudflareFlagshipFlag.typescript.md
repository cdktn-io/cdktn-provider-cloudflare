# `dataCloudflareFlagshipFlag` Submodule <a name="`dataCloudflareFlagshipFlag` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareFlagshipFlag <a name="DataCloudflareFlagshipFlag" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/flagship_flag cloudflare_flagship_flag}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.Initializer"></a>

```typescript
import { dataCloudflareFlagshipFlag } from '@cdktn/provider-cloudflare'

new dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag(scope: Construct, id: string, config: DataCloudflareFlagshipFlagConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagConfig">DataCloudflareFlagshipFlagConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagConfig">DataCloudflareFlagshipFlagConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareFlagshipFlag resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.isConstruct"></a>

```typescript
import { dataCloudflareFlagshipFlag } from '@cdktn/provider-cloudflare'

dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.isTerraformElement"></a>

```typescript
import { dataCloudflareFlagshipFlag } from '@cdktn/provider-cloudflare'

dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.isTerraformDataSource"></a>

```typescript
import { dataCloudflareFlagshipFlag } from '@cdktn/provider-cloudflare'

dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.generateConfigForImport"></a>

```typescript
import { dataCloudflareFlagshipFlag } from '@cdktn/provider-cloudflare'

dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflareFlagshipFlag resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareFlagshipFlag to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareFlagshipFlag that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/flagship_flag#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareFlagshipFlag to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.property.defaultVariation">defaultVariation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesList">DataCloudflareFlagshipFlagRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.property.updatedBy">updatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.property.variations">variations</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.property.appIdInput">appIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.property.flagKeyInput">flagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.property.appId">appId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.property.flagKey">flagKey</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `defaultVariation`<sup>Required</sup> <a name="defaultVariation" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.property.defaultVariation"></a>

```typescript
public readonly defaultVariation: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.property.rules"></a>

```typescript
public readonly rules: DataCloudflareFlagshipFlagRulesList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesList">DataCloudflareFlagshipFlagRulesList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `updatedBy`<sup>Required</sup> <a name="updatedBy" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.property.updatedBy"></a>

```typescript
public readonly updatedBy: string;
```

- *Type:* string

---

##### `variations`<sup>Required</sup> <a name="variations" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.property.variations"></a>

```typescript
public readonly variations: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `appIdInput`<sup>Optional</sup> <a name="appIdInput" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.property.appIdInput"></a>

```typescript
public readonly appIdInput: string;
```

- *Type:* string

---

##### `flagKeyInput`<sup>Optional</sup> <a name="flagKeyInput" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.property.flagKeyInput"></a>

```typescript
public readonly flagKeyInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

---

##### `flagKey`<sup>Required</sup> <a name="flagKey" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.property.flagKey"></a>

```typescript
public readonly flagKey: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlag.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareFlagshipFlagConfig <a name="DataCloudflareFlagshipFlagConfig" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagConfig.Initializer"></a>

```typescript
import { dataCloudflareFlagshipFlag } from '@cdktn/provider-cloudflare'

const dataCloudflareFlagshipFlagConfig: dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagConfig.property.accountId">accountId</a></code> | <code>string</code> | Cloudflare account ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagConfig.property.appId">appId</a></code> | <code>string</code> | App identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagConfig.property.flagKey">flagKey</a></code> | <code>string</code> | Flag key (slug). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Cloudflare account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/flagship_flag#account_id DataCloudflareFlagshipFlag#account_id}

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagConfig.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

App identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/flagship_flag#app_id DataCloudflareFlagshipFlag#app_id}

---

##### `flagKey`<sup>Required</sup> <a name="flagKey" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagConfig.property.flagKey"></a>

```typescript
public readonly flagKey: string;
```

- *Type:* string

Flag key (slug).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/flagship_flag#flag_key DataCloudflareFlagshipFlag#flag_key}

---

### DataCloudflareFlagshipFlagRules <a name="DataCloudflareFlagshipFlagRules" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRules.Initializer"></a>

```typescript
import { dataCloudflareFlagshipFlag } from '@cdktn/provider-cloudflare'

const dataCloudflareFlagshipFlagRules: dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRules = { ... }
```


### DataCloudflareFlagshipFlagRulesConditions <a name="DataCloudflareFlagshipFlagRulesConditions" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditions.Initializer"></a>

```typescript
import { dataCloudflareFlagshipFlag } from '@cdktn/provider-cloudflare'

const dataCloudflareFlagshipFlagRulesConditions: dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditions = { ... }
```


### DataCloudflareFlagshipFlagRulesConditionsClauses <a name="DataCloudflareFlagshipFlagRulesConditionsClauses" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClauses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClauses.Initializer"></a>

```typescript
import { dataCloudflareFlagshipFlag } from '@cdktn/provider-cloudflare'

const dataCloudflareFlagshipFlagRulesConditionsClauses: dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClauses = { ... }
```


### DataCloudflareFlagshipFlagRulesRollout <a name="DataCloudflareFlagshipFlagRulesRollout" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesRollout"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesRollout.Initializer"></a>

```typescript
import { dataCloudflareFlagshipFlag } from '@cdktn/provider-cloudflare'

const dataCloudflareFlagshipFlagRulesRollout: dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesRollout = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareFlagshipFlagRulesConditionsClausesList <a name="DataCloudflareFlagshipFlagRulesConditionsClausesList" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesList.Initializer"></a>

```typescript
import { dataCloudflareFlagshipFlag } from '@cdktn/provider-cloudflare'

new dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesList.get"></a>

```typescript
public get(index: number): DataCloudflareFlagshipFlagRulesConditionsClausesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareFlagshipFlagRulesConditionsClausesOutputReference <a name="DataCloudflareFlagshipFlagRulesConditionsClausesOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesOutputReference.Initializer"></a>

```typescript
import { dataCloudflareFlagshipFlag } from '@cdktn/provider-cloudflare'

new dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesOutputReference.property.attribute">attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesOutputReference.property.clauses">clauses</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesList">DataCloudflareFlagshipFlagRulesConditionsClausesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesOutputReference.property.logicalOperator">logicalOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClauses">DataCloudflareFlagshipFlagRulesConditionsClauses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesOutputReference.property.attribute"></a>

```typescript
public readonly attribute: string;
```

- *Type:* string

---

##### `clauses`<sup>Required</sup> <a name="clauses" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesOutputReference.property.clauses"></a>

```typescript
public readonly clauses: DataCloudflareFlagshipFlagRulesConditionsClausesList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesList">DataCloudflareFlagshipFlagRulesConditionsClausesList</a>

---

##### `logicalOperator`<sup>Required</sup> <a name="logicalOperator" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesOutputReference.property.logicalOperator"></a>

```typescript
public readonly logicalOperator: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareFlagshipFlagRulesConditionsClauses;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClauses">DataCloudflareFlagshipFlagRulesConditionsClauses</a>

---


### DataCloudflareFlagshipFlagRulesConditionsList <a name="DataCloudflareFlagshipFlagRulesConditionsList" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsList.Initializer"></a>

```typescript
import { dataCloudflareFlagshipFlag } from '@cdktn/provider-cloudflare'

new dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsList.get"></a>

```typescript
public get(index: number): DataCloudflareFlagshipFlagRulesConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareFlagshipFlagRulesConditionsOutputReference <a name="DataCloudflareFlagshipFlagRulesConditionsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsOutputReference.Initializer"></a>

```typescript
import { dataCloudflareFlagshipFlag } from '@cdktn/provider-cloudflare'

new dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsOutputReference.property.attribute">attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsOutputReference.property.clauses">clauses</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesList">DataCloudflareFlagshipFlagRulesConditionsClausesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsOutputReference.property.logicalOperator">logicalOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditions">DataCloudflareFlagshipFlagRulesConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsOutputReference.property.attribute"></a>

```typescript
public readonly attribute: string;
```

- *Type:* string

---

##### `clauses`<sup>Required</sup> <a name="clauses" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsOutputReference.property.clauses"></a>

```typescript
public readonly clauses: DataCloudflareFlagshipFlagRulesConditionsClausesList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsClausesList">DataCloudflareFlagshipFlagRulesConditionsClausesList</a>

---

##### `logicalOperator`<sup>Required</sup> <a name="logicalOperator" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsOutputReference.property.logicalOperator"></a>

```typescript
public readonly logicalOperator: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareFlagshipFlagRulesConditions;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditions">DataCloudflareFlagshipFlagRulesConditions</a>

---


### DataCloudflareFlagshipFlagRulesList <a name="DataCloudflareFlagshipFlagRulesList" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesList.Initializer"></a>

```typescript
import { dataCloudflareFlagshipFlag } from '@cdktn/provider-cloudflare'

new dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesList.get"></a>

```typescript
public get(index: number): DataCloudflareFlagshipFlagRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareFlagshipFlagRulesOutputReference <a name="DataCloudflareFlagshipFlagRulesOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesOutputReference.Initializer"></a>

```typescript
import { dataCloudflareFlagshipFlag } from '@cdktn/provider-cloudflare'

new dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsList">DataCloudflareFlagshipFlagRulesConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesOutputReference.property.rollout">rollout</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesRolloutOutputReference">DataCloudflareFlagshipFlagRulesRolloutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesOutputReference.property.serveVariation">serveVariation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRules">DataCloudflareFlagshipFlagRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesOutputReference.property.conditions"></a>

```typescript
public readonly conditions: DataCloudflareFlagshipFlagRulesConditionsList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesConditionsList">DataCloudflareFlagshipFlagRulesConditionsList</a>

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `rollout`<sup>Required</sup> <a name="rollout" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesOutputReference.property.rollout"></a>

```typescript
public readonly rollout: DataCloudflareFlagshipFlagRulesRolloutOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesRolloutOutputReference">DataCloudflareFlagshipFlagRulesRolloutOutputReference</a>

---

##### `serveVariation`<sup>Required</sup> <a name="serveVariation" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesOutputReference.property.serveVariation"></a>

```typescript
public readonly serveVariation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareFlagshipFlagRules;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRules">DataCloudflareFlagshipFlagRules</a>

---


### DataCloudflareFlagshipFlagRulesRolloutOutputReference <a name="DataCloudflareFlagshipFlagRulesRolloutOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesRolloutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesRolloutOutputReference.Initializer"></a>

```typescript
import { dataCloudflareFlagshipFlag } from '@cdktn/provider-cloudflare'

new dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesRolloutOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesRolloutOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesRolloutOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesRolloutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesRolloutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesRolloutOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesRolloutOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesRolloutOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesRolloutOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesRolloutOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesRolloutOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesRolloutOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesRolloutOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesRolloutOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesRolloutOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesRolloutOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesRolloutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesRolloutOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesRolloutOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesRolloutOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesRolloutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesRolloutOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesRolloutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesRolloutOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesRolloutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesRolloutOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesRolloutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesRolloutOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesRolloutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesRolloutOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesRolloutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesRolloutOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesRolloutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesRolloutOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesRolloutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesRolloutOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesRolloutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesRolloutOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesRolloutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesRolloutOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesRolloutOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesRolloutOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesRolloutOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesRolloutOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesRolloutOutputReference.property.attribute">attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesRolloutOutputReference.property.percentage">percentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesRolloutOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesRollout">DataCloudflareFlagshipFlagRulesRollout</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesRolloutOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesRolloutOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesRolloutOutputReference.property.attribute"></a>

```typescript
public readonly attribute: string;
```

- *Type:* string

---

##### `percentage`<sup>Required</sup> <a name="percentage" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesRolloutOutputReference.property.percentage"></a>

```typescript
public readonly percentage: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesRolloutOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareFlagshipFlagRulesRollout;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareFlagshipFlag.DataCloudflareFlagshipFlagRulesRollout">DataCloudflareFlagshipFlagRulesRollout</a>

---



