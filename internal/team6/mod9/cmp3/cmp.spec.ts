
import { Cmp8693Component } from './cmp';
describe('Cmp8693Component', () => {
  it('should add', () => {
    expect(new Cmp8693Component().add8693(1)).toBe(8694);
  });
});