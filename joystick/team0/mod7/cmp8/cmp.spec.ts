
import { Cmp9078Component } from './cmp';
describe('Cmp9078Component', () => {
  it('should add', () => {
    expect(new Cmp9078Component().add9078(1)).toBe(9079);
  });
});