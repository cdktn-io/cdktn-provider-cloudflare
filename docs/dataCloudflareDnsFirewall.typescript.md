# `dataCloudflareDnsFirewall` Submodule <a name="`dataCloudflareDnsFirewall` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareDnsFirewall <a name="DataCloudflareDnsFirewall" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/dns_firewall cloudflare_dns_firewall}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.Initializer"></a>

```typescript
import { dataCloudflareDnsFirewall } from '@cdktn/provider-cloudflare'

new dataCloudflareDnsFirewall.DataCloudflareDnsFirewall(scope: Construct, id: string, config: DataCloudflareDnsFirewallConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallConfig">DataCloudflareDnsFirewallConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallConfig">DataCloudflareDnsFirewallConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareDnsFirewall resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.isConstruct"></a>

```typescript
import { dataCloudflareDnsFirewall } from '@cdktn/provider-cloudflare'

dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.isTerraformElement"></a>

```typescript
import { dataCloudflareDnsFirewall } from '@cdktn/provider-cloudflare'

dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.isTerraformDataSource"></a>

```typescript
import { dataCloudflareDnsFirewall } from '@cdktn/provider-cloudflare'

dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.generateConfigForImport"></a>

```typescript
import { dataCloudflareDnsFirewall } from '@cdktn/provider-cloudflare'

dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflareDnsFirewall resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareDnsFirewall to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareDnsFirewall that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/dns_firewall#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareDnsFirewall to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.attackMitigation">attackMitigation</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference">DataCloudflareDnsFirewallAttackMitigationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.deprecateAnyRequests">deprecateAnyRequests</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.dnsFirewallIps">dnsFirewallIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.ecsFallback">ecsFallback</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.maximumCacheTtl">maximumCacheTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.minimumCacheTtl">minimumCacheTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.modifiedOn">modifiedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.negativeCacheTtl">negativeCacheTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.ratelimit">ratelimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.retries">retries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.upstreamIps">upstreamIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.dnsFirewallIdInput">dnsFirewallIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.dnsFirewallId">dnsFirewallId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `attackMitigation`<sup>Required</sup> <a name="attackMitigation" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.attackMitigation"></a>

```typescript
public readonly attackMitigation: DataCloudflareDnsFirewallAttackMitigationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference">DataCloudflareDnsFirewallAttackMitigationOutputReference</a>

---

##### `deprecateAnyRequests`<sup>Required</sup> <a name="deprecateAnyRequests" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.deprecateAnyRequests"></a>

```typescript
public readonly deprecateAnyRequests: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `dnsFirewallIps`<sup>Required</sup> <a name="dnsFirewallIps" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.dnsFirewallIps"></a>

```typescript
public readonly dnsFirewallIps: string[];
```

- *Type:* string[]

---

##### `ecsFallback`<sup>Required</sup> <a name="ecsFallback" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.ecsFallback"></a>

```typescript
public readonly ecsFallback: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maximumCacheTtl`<sup>Required</sup> <a name="maximumCacheTtl" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.maximumCacheTtl"></a>

```typescript
public readonly maximumCacheTtl: number;
```

- *Type:* number

---

##### `minimumCacheTtl`<sup>Required</sup> <a name="minimumCacheTtl" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.minimumCacheTtl"></a>

```typescript
public readonly minimumCacheTtl: number;
```

- *Type:* number

---

##### `modifiedOn`<sup>Required</sup> <a name="modifiedOn" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.modifiedOn"></a>

```typescript
public readonly modifiedOn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `negativeCacheTtl`<sup>Required</sup> <a name="negativeCacheTtl" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.negativeCacheTtl"></a>

```typescript
public readonly negativeCacheTtl: number;
```

- *Type:* number

---

##### `ratelimit`<sup>Required</sup> <a name="ratelimit" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.ratelimit"></a>

```typescript
public readonly ratelimit: number;
```

- *Type:* number

---

##### `retries`<sup>Required</sup> <a name="retries" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.retries"></a>

```typescript
public readonly retries: number;
```

- *Type:* number

---

##### `upstreamIps`<sup>Required</sup> <a name="upstreamIps" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.upstreamIps"></a>

```typescript
public readonly upstreamIps: string[];
```

- *Type:* string[]

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `dnsFirewallIdInput`<sup>Optional</sup> <a name="dnsFirewallIdInput" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.dnsFirewallIdInput"></a>

```typescript
public readonly dnsFirewallIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `dnsFirewallId`<sup>Required</sup> <a name="dnsFirewallId" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.dnsFirewallId"></a>

```typescript
public readonly dnsFirewallId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareDnsFirewallAttackMitigation <a name="DataCloudflareDnsFirewallAttackMitigation" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigation.Initializer"></a>

```typescript
import { dataCloudflareDnsFirewall } from '@cdktn/provider-cloudflare'

const dataCloudflareDnsFirewallAttackMitigation: dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigation = { ... }
```


### DataCloudflareDnsFirewallConfig <a name="DataCloudflareDnsFirewallConfig" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallConfig.Initializer"></a>

```typescript
import { dataCloudflareDnsFirewall } from '@cdktn/provider-cloudflare'

const dataCloudflareDnsFirewallConfig: dataCloudflareDnsFirewall.DataCloudflareDnsFirewallConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallConfig.property.accountId">accountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallConfig.property.dnsFirewallId">dnsFirewallId</a></code> | <code>string</code> | Identifier. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/dns_firewall#account_id DataCloudflareDnsFirewall#account_id}

---

##### `dnsFirewallId`<sup>Required</sup> <a name="dnsFirewallId" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallConfig.property.dnsFirewallId"></a>

```typescript
public readonly dnsFirewallId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/dns_firewall#dns_firewall_id DataCloudflareDnsFirewall#dns_firewall_id}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareDnsFirewallAttackMitigationOutputReference <a name="DataCloudflareDnsFirewallAttackMitigationOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.Initializer"></a>

```typescript
import { dataCloudflareDnsFirewall } from '@cdktn/provider-cloudflare'

new dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.property.onlyWhenUpstreamUnhealthy">onlyWhenUpstreamUnhealthy</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigation">DataCloudflareDnsFirewallAttackMitigation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `onlyWhenUpstreamUnhealthy`<sup>Required</sup> <a name="onlyWhenUpstreamUnhealthy" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.property.onlyWhenUpstreamUnhealthy"></a>

```typescript
public readonly onlyWhenUpstreamUnhealthy: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareDnsFirewallAttackMitigation;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigation">DataCloudflareDnsFirewallAttackMitigation</a>

---



