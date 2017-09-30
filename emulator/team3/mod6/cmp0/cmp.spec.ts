
import { Cmp4360Component } from './cmp';
describe('Cmp4360Component', () => {
  it('should add', () => {
    expect(new Cmp4360Component().add4360(1)).toBe(4361);
  });
});