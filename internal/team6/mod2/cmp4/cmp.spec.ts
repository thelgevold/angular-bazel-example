
import { Cmp8624Component } from './cmp';
describe('Cmp8624Component', () => {
  it('should add', () => {
    expect(new Cmp8624Component().add8624(1)).toBe(8625);
  });
});