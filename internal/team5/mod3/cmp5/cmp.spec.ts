
import { Cmp8535Component } from './cmp';
describe('Cmp8535Component', () => {
  it('should add', () => {
    expect(new Cmp8535Component().add8535(1)).toBe(8536);
  });
});