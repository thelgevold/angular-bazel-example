
import { Cmp8138Component } from './cmp';
describe('Cmp8138Component', () => {
  it('should add', () => {
    expect(new Cmp8138Component().add8138(1)).toBe(8139);
  });
});