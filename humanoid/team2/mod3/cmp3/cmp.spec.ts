
import { Cmp7233Component } from './cmp';
describe('Cmp7233Component', () => {
  it('should add', () => {
    expect(new Cmp7233Component().add7233(1)).toBe(7234);
  });
});