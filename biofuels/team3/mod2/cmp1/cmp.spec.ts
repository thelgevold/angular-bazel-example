
import { Cmp1321Component } from './cmp';
describe('Cmp1321Component', () => {
  it('should add', () => {
    expect(new Cmp1321Component().add1321(1)).toBe(1322);
  });
});