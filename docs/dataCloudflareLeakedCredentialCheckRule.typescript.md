# `dataCloudflareLeakedCredentialCheckRule` Submodule <a name="`dataCloudflareLeakedCredentialCheckRule` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareLeakedCredentialCheckRule <a name="DataCloudflareLeakedCredentialCheckRule" id="@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/leaked_credential_check_rule cloudflare_leaked_credential_check_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.Initializer"></a>

```typescript
import { dataCloudflareLeakedCredentialCheckRule } from '@cdktn/provider-cloudflare'

new dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule(scope: Construct, id: string, config: DataCloudflareLeakedCredentialCheckRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRuleConfig">DataCloudflareLeakedCredentialCheckRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRuleConfig">DataCloudflareLeakedCredentialCheckRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareLeakedCredentialCheckRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.isConstruct"></a>

```typescript
import { dataCloudflareLeakedCredentialCheckRule } from '@cdktn/provider-cloudflare'

dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.isTerraformElement"></a>

```typescript
import { dataCloudflareLeakedCredentialCheckRule } from '@cdktn/provider-cloudflare'

dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.isTerraformDataSource"></a>

```typescript
import { dataCloudflareLeakedCredentialCheckRule } from '@cdktn/provider-cloudflare'

dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.generateConfigForImport"></a>

```typescript
import { dataCloudflareLeakedCredentialCheckRule } from '@cdktn/provider-cloudflare'

dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflareLeakedCredentialCheckRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareLeakedCredentialCheckRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareLeakedCredentialCheckRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/leaked_credential_check_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareLeakedCredentialCheckRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.property.detectionIdInput">detectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.property.detectionId">detectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `detectionIdInput`<sup>Optional</sup> <a name="detectionIdInput" id="@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.property.detectionIdInput"></a>

```typescript
public readonly detectionIdInput: string;
```

- *Type:* string

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `detectionId`<sup>Required</sup> <a name="detectionId" id="@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.property.detectionId"></a>

```typescript
public readonly detectionId: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareLeakedCredentialCheckRuleConfig <a name="DataCloudflareLeakedCredentialCheckRuleConfig" id="@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRuleConfig.Initializer"></a>

```typescript
import { dataCloudflareLeakedCredentialCheckRule } from '@cdktn/provider-cloudflare'

const dataCloudflareLeakedCredentialCheckRuleConfig: dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRuleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRuleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRuleConfig.property.detectionId">detectionId</a></code> | <code>string</code> | Defines the unique ID for this custom detection. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRuleConfig.property.zoneId">zoneId</a></code> | <code>string</code> | Defines an identifier. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `detectionId`<sup>Required</sup> <a name="detectionId" id="@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRuleConfig.property.detectionId"></a>

```typescript
public readonly detectionId: string;
```

- *Type:* string

Defines the unique ID for this custom detection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/leaked_credential_check_rule#detection_id DataCloudflareLeakedCredentialCheckRule#detection_id}

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.dataCloudflareLeakedCredentialCheckRule.DataCloudflareLeakedCredentialCheckRuleConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

Defines an identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/leaked_credential_check_rule#zone_id DataCloudflareLeakedCredentialCheckRule#zone_id}

---



