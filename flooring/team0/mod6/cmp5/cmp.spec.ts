
import { Cmp5065Component } from './cmp';
describe('Cmp5065Component', () => {
  it('should add', () => {
    expect(new Cmp5065Component().add5065(1)).toBe(5066);
  });
});