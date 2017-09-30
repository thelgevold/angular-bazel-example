
import { Cmp8152Component } from './cmp';
describe('Cmp8152Component', () => {
  it('should add', () => {
    expect(new Cmp8152Component().add8152(1)).toBe(8153);
  });
});