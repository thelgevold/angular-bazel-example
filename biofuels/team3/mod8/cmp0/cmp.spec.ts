
import { Cmp1380Component } from './cmp';
describe('Cmp1380Component', () => {
  it('should add', () => {
    expect(new Cmp1380Component().add1380(1)).toBe(1381);
  });
});