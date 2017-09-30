
import { Cmp7310Component } from './cmp';
describe('Cmp7310Component', () => {
  it('should add', () => {
    expect(new Cmp7310Component().add7310(1)).toBe(7311);
  });
});