
import { Cmp9079Component } from './cmp';
describe('Cmp9079Component', () => {
  it('should add', () => {
    expect(new Cmp9079Component().add9079(1)).toBe(9080);
  });
});