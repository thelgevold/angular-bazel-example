
import { Cmp9981Component } from './cmp';
describe('Cmp9981Component', () => {
  it('should add', () => {
    expect(new Cmp9981Component().add9981(1)).toBe(9982);
  });
});