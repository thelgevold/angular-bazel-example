
import { Cmp4132Component } from './cmp';
describe('Cmp4132Component', () => {
  it('should add', () => {
    expect(new Cmp4132Component().add4132(1)).toBe(4133);
  });
});