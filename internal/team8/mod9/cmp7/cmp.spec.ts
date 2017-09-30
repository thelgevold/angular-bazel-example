
import { Cmp8897Component } from './cmp';
describe('Cmp8897Component', () => {
  it('should add', () => {
    expect(new Cmp8897Component().add8897(1)).toBe(8898);
  });
});