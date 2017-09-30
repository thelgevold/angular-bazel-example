
import { Cmp7707Component } from './cmp';
describe('Cmp7707Component', () => {
  it('should add', () => {
    expect(new Cmp7707Component().add7707(1)).toBe(7708);
  });
});