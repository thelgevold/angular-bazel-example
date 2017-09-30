
import { Cmp4208Component } from './cmp';
describe('Cmp4208Component', () => {
  it('should add', () => {
    expect(new Cmp4208Component().add4208(1)).toBe(4209);
  });
});