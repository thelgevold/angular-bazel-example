
import { Cmp3065Component } from './cmp';
describe('Cmp3065Component', () => {
  it('should add', () => {
    expect(new Cmp3065Component().add3065(1)).toBe(3066);
  });
});