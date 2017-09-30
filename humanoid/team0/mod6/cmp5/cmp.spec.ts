
import { Cmp7065Component } from './cmp';
describe('Cmp7065Component', () => {
  it('should add', () => {
    expect(new Cmp7065Component().add7065(1)).toBe(7066);
  });
});