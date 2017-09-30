
import { Cmp8262Component } from './cmp';
describe('Cmp8262Component', () => {
  it('should add', () => {
    expect(new Cmp8262Component().add8262(1)).toBe(8263);
  });
});