
import { Cmp9013Component } from './cmp';
describe('Cmp9013Component', () => {
  it('should add', () => {
    expect(new Cmp9013Component().add9013(1)).toBe(9014);
  });
});