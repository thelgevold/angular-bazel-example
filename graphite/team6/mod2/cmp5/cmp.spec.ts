
import { Cmp6625Component } from './cmp';
describe('Cmp6625Component', () => {
  it('should add', () => {
    expect(new Cmp6625Component().add6625(1)).toBe(6626);
  });
});