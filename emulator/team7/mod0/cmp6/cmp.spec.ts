
import { Cmp4706Component } from './cmp';
describe('Cmp4706Component', () => {
  it('should add', () => {
    expect(new Cmp4706Component().add4706(1)).toBe(4707);
  });
});