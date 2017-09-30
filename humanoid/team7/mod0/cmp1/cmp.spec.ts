
import { Cmp7701Component } from './cmp';
describe('Cmp7701Component', () => {
  it('should add', () => {
    expect(new Cmp7701Component().add7701(1)).toBe(7702);
  });
});