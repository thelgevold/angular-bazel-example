
import { Cmp8648Component } from './cmp';
describe('Cmp8648Component', () => {
  it('should add', () => {
    expect(new Cmp8648Component().add8648(1)).toBe(8649);
  });
});