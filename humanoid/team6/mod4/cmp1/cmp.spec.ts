
import { Cmp7641Component } from './cmp';
describe('Cmp7641Component', () => {
  it('should add', () => {
    expect(new Cmp7641Component().add7641(1)).toBe(7642);
  });
});