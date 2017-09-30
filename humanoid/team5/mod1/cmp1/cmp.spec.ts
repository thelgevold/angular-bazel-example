
import { Cmp7511Component } from './cmp';
describe('Cmp7511Component', () => {
  it('should add', () => {
    expect(new Cmp7511Component().add7511(1)).toBe(7512);
  });
});