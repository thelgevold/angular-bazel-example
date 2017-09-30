
import { Cmp7360Component } from './cmp';
describe('Cmp7360Component', () => {
  it('should add', () => {
    expect(new Cmp7360Component().add7360(1)).toBe(7361);
  });
});