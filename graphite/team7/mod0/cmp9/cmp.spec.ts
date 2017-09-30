
import { Cmp6709Component } from './cmp';
describe('Cmp6709Component', () => {
  it('should add', () => {
    expect(new Cmp6709Component().add6709(1)).toBe(6710);
  });
});