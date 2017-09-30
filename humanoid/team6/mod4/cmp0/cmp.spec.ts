
import { Cmp7640Component } from './cmp';
describe('Cmp7640Component', () => {
  it('should add', () => {
    expect(new Cmp7640Component().add7640(1)).toBe(7641);
  });
});